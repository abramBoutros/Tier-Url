"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = require("../controllers/url");
const urlRouter = require("express").Router();
// routes
// shorten a url
urlRouter.post("/api/v1/url", url_1.addUrl);
// test the server running
urlRouter.get("/", async (req, res) => {
    res.send("hello");
});
// get the long url by code
urlRouter.get("/:code", url_1.redirectUrl);
exports.default = urlRouter;
