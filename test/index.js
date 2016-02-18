"use strict";
var chai = require("chai");
var ping = require("../src/index");
var expect = chai.expect;
// TODO: Create temporary HTTP service for test
describe("ping tests", function () {
    it("will ping google.com and return a response time", function (done) {
        ping("google.com")
            .then(function (time) {
            expect(time).to.be.above(0);
            done();
        })
            .catch(done);
    });
    it("will return -1 when a domain cannot be reached", function (done) {
        ping("some-domain-that-better-not-exist.fake")
            .then(done)
            .catch(function (error) {
            expect(error).to.equal(-1);
            done();
        });
    });
});
