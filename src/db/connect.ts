const mongoose = require("mongoose");

export default async () => {
	try {
		mongoose.connect(
			process.env.ATLAS_URI,
			() => {
				console.log("connected to DB");
			},
			// err in connection
			(e: Error) => console.log(e)
		);

		// I know that this err var could be many types so I just added any
	} catch (err: any) {
		console.error(err.message);
		process.exit(1);
	}
};
