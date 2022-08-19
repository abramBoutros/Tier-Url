"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const VisitSchema = new mongoose_1.Schema({
    counter: {
        type: Number,
        required: true,
        unique: true,
        default: 0,
    },
}, 
// add time stamps for future db analysis
{ timestamps: true });
const VisitModel = (0, mongoose_1.model)("Visit", VisitSchema);
exports.default = VisitModel;
