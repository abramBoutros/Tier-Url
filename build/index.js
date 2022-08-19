"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const connect_1 = __importDefault(require("./db/connect"));
const morgan_1 = __importDefault(require("morgan"));
const routers_1 = __importDefault(require("./routers"));
const addCount_1 = __importDefault(require("./middlewares/addCount"));
require("dotenv").config({ path: path_1.default.resolve(__dirname, "./.env") });
//Connect to database
(0, connect_1.default)();
// create app instance
const app = (0, express_1.default)();
// parse the request body
app.use(express_1.default.json());
//middleware
if (process.env.NODE_ENV === "development") {
    app.use((0, morgan_1.default)("dev"));
}
// add addCount middleware before the routes
app.use(addCount_1.default);
// add the main routers
app.use("/", routers_1.default);
let port = 3000;
if (process.env.PORT) {
    port = +process.env.PORT;
}
app.listen(port, () => console.log("server running on port: " + port));
// create server instance for testing
function createServer() {
    const app = (0, express_1.default)();
    app.use(addCount_1.default);
    app.use("/", routers_1.default);
    return app;
}
exports.default = createServer;
