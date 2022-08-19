import express, { Application } from "express";
import path from "path";
import connectDB from "./db/connect";
import morgan from "morgan";
import router from "./routers";
import addCount from "./middlewares/addCount";
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

//Connect to database
connectDB();

// create app instance
const app: Application = express();

// parse the request body
app.use(express.json());

//middleware
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}
// add addCount middleware before the routes
app.use(addCount);

// add the main routers
app.use("/", router);

let port: number = 3000;
if (process.env.PORT) {
	port = +process.env.PORT;
}

app.listen(port, (): void => console.log("server running on port: " + port));

// create server instance for testing
export default function createServer() {
	const app: Application = express();
	app.use(addCount);
	app.use("/", router);

	return app;
}
