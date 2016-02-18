import chai = require("chai");
import ping = require("../src/index");
var expect = chai.expect;

describe("ping tests", () => {
	it("will ping google.com and return a response time", done => {
		ping("google.com")
			.then(time => {
				expect(time > 0).to.equal(true);
				done();
			}).catch(done);
	});

	it("will return -1 when a domain cannot be reached", done => {
		ping("some-domain-that-better-not-exist.fake")
			.then(time => {
				expect(time).to.equal(-1);
				done();
			}).catch(done);
	});
});
