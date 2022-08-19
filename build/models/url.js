"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UrlSchema = new mongoose_1.Schema({
    // the full Url
    longUrl: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    // the base Url followed by the code, this is the useable one
    shortUrl: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    // the unique short code that is generated as an identifier
    urlCode: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    // this is kinda useless cuz I can't have tier.app as base url I don't own the domain name
    // unusable
    tierUrl: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
}, 
// add time stamps for future db analysis
{ timestamps: true });
const UrlModel = (0, mongoose_1.model)("Url", UrlSchema);
exports.default = UrlModel;
