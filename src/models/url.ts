import { model, Schema } from "mongoose";

const UrlSchema: Schema = new Schema(
	{
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
	{ timestamps: true }
);

const UrlModel = model("Url", UrlSchema);
export default UrlModel;
