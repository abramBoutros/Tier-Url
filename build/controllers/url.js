"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redirectUrl = exports.addUrl = void 0;
const valid_url_1 = __importDefault(require("valid-url"));
const shortid_1 = __importDefault(require("shortid"));
const url_1 = __importDefault(require("../models/url"));
const addUrl = async (req, res) => {
    const longUrl = req.body.longUrl;
    if (!longUrl || !valid_url_1.default.isUri(longUrl)) {
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
    const urlCode = shortid_1.default.generate();
    // this url is unique as long as we run on one thread
    // as it is dependant on the timestamp
    // Check base url
    if (!valid_url_1.default.isUri(baseUrl)) {
        return res.status(401).json("Invalid base url");
    }
    try {
        // find a document by the long url
        let url = await url_1.default.findOne({ longUrl });
        if (url) {
            // if we found the url in our db already return it without storing a new one in db
            return res.status(200).json({
                status: "success",
                data: {
                    url,
                },
            });
        }
        else {
            const shortUrl = baseUrl + "/" + urlCode;
            const tierUrl = "tier.app/" + urlCode;
            url = new url_1.default({
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
    }
    catch (err) {
        return res.status(500).json("Server error");
    }
};
exports.addUrl = addUrl;
const redirectUrl = async (req, res) => {
    try {
        const url = await url_1.default.findOne({ urlCode: req.params.code });
        if (url) {
            return res.redirect(url.longUrl);
        }
        else {
            return res.status(404).json("No url found");
        }
    }
    catch (err) {
        res.status(500).json("Server error");
    }
};
exports.redirectUrl = redirectUrl;
