import validUrl from "valid-url";
import shortid from "shortid";
import { Request, Response } from "express";

import Url from "../models/url";
import IUrl from "../interfaces/url";

export const addUrl = async (req: Request, res: Response) => {
	const longUrl: string = req.body.longUrl;

	if (!longUrl || !validUrl.isUri(longUrl)) {
		return res.status(422).json({
			status: "fail",
			message: "please send a valid url in the body",
		});
	}
	const baseUrl = process.env.BASE_URL;
	if (!baseUrl) {
		return res.status(500).json({
			status: "fail",
			message: "Our base URL is down, see you soon",
		});
	}

	// create url code
	const urlCode = shortid.generate();
	// this url is unique as long as we run on one thread
	// as it is dependant on the timestamp

	// Check base url
	if (!validUrl.isUri(baseUrl)) {
		return res.status(401).json("Invalid base url");
	}

	try {
		// find a document by the long url
		let url = await Url.findOne({ longUrl });

		if (url) {
			// if we found the url in our db already return it without storing a new one in db
			return res.status(200).json({
				status: "success",
				data: {
					url,
				},
			});
		} else {
			const shortUrl: string = baseUrl + "/" + urlCode;
			const tierUrl: string = "tier.app/" + urlCode;

			url = new Url<IUrl>({
				longUrl,
				shortUrl,
				urlCode,
				tierUrl,
			});

			await url.save();

			return res.status(200).json({
				status: "success",
				data: {
					url,
				},
			});
		}
	} catch (err) {
		return res.status(500).json("Server error");
	}
};

export const redirectUrl = async (req: Request, res: Response) => {
	try {
		const url = await Url.findOne({ urlCode: req.params.code });

		if (url) {
			return res.redirect(url.longUrl);
		} else {
			return res.status(404).json("No url found");
		}
	} catch (err) {
		res.status(500).json("Server error");
	}
};
