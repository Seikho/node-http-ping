var http = require("http");
var Promise = require("bluebird");
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
//# sourceMappingURL=index.js.map