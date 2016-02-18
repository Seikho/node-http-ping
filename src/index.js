"use strict";
var http = require("http");
var Promise = require("bluebird");
/**
 * Sends a 'GET /' request to a server and returns a promise that returns the round trip time in milliseconds.
 * @param url The destination url. E.g. www.google.com
 * @param port Optional: The port number of the destination. Defaults to 80
 * @returns Promise<{responseTime: number }> A promise that returns the round trip time in milliseconds. Returns -1 if an error occurred.
 * */
function ping(url, port) {
    var promise = new Promise(function (resolve) {
        var result;
        var options = { host: url, port: port || 80, path: '/' };
        var start = Date.now();
        var pingRequest = http.request(options, function () {
            result = Date.now() - start;
            resolve(result);
            pingRequest.abort();
        });
        pingRequest.on("error", function () {
            result = -1;
            resolve(result);
            pingRequest.abort();
        });
        pingRequest.write("");
        pingRequest.end();
    });
    return promise;
}
module.exports = ping;
