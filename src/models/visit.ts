import { model, Schema } from "mongoose";
import { isNumberObject } from "util/types";

const VisitSchema: Schema = new Schema(
	{
		counter: {
			type: Number,
			required: true,
			unique: true,
			default: 0,
		},
	},
	// add time stamps for future db analysis
	{ timestamps: true }
);

const VisitModel = model("Visit", VisitSchema);
export default VisitModel;
