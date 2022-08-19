"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.default = async () => {
    try {
        mongoose.connect(process.env.ATLAS_URI, () => {
            console.log("connected to DB");
        }, 
        // err in connection
        (e) => console.log(e));
        // I know that this err var could be many types so I just added any
    }
    catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};
