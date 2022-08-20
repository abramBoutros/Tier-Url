import { addUrl, redirectUrl } from "../controllers/url";
const urlRouter = require("express").Router();
import { Request, Response } from "express";

// routes

// shorten a url
urlRouter.post("/api/v1/url", addUrl);

// test the server running
urlRouter.get("/", async (req: Request, res: Response) => {
	res.send("Working");
});

// get the long url by code
urlRouter.get("/:code", redirectUrl);

export default urlRouter;
