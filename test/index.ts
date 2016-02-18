import chai = require("chai");
import ping = require("../src/index");
var expect = chai.expect;

// TODO: Create temporary HTTP service for test

describe("ping tests", () => {
    it("will ping google.com and return a response time", done => {
        ping("google.com")
            .then(time => {
                expect(time).to.be.above(0);
                done();
            })
            .catch(done);
    });

    it("will return -1 when a domain cannot be reached", done => {
        ping("some-domain-that-better-not-exist.fake")
            .then(done)
            .catch(error => {
                expect(error).to.equal(-1);
                done();
            });
    });
});
