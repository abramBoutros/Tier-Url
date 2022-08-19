import request from "supertest";
import { expect } from "chai";

import createServer from "../../index";
const app = createServer();

it("Should respond with a url object including the short url", function (done) {
	request(app)
		.post("/api/v1/url")
		.send({
			longUrl: "https://github.com/abramBoutros",
		})
		.expect(200)
		.expect("Content-Type", /json/)
		.end(function (err, res) {
			if (err) done(err);
			res.body.should.have.property("data");
			res.body.data.should.have.property("url", {
				_id: "62ff440548e3d2c8a395428e",
				longUrl: "https://github.com/abramBoutros",
				shortUrl: "http://localhost:3000/2XRIRBblR",
				urlCode: "2XRIRBblR",
				tierUrl: "tier.app/2XRIRBblR",
				createdAt: "2022-08-19T08:04:21.499Z",
				updatedAt: "2022-08-19T08:04:21.499Z",
				__v: 0,
			});
		});
	done();
});
