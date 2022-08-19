import Visit from "../models/visit";
import { Request, Response, NextFunction } from "express";

export default async (req: Request, res: Response, next: NextFunction) => {
	try {
		let visitsCount = await Visit.findOne();

		if (!visitsCount) {
			let visitsCount = new Visit({
				counter: 1,
			});
			await visitsCount.save();
			next();
		} else {
			visitsCount.counter++;
			await visitsCount.save();
			next();
		}
	} catch (e) {
		return res.status(500).json("Server error");
	}
};
