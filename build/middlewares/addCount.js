"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const visit_1 = __importDefault(require("../models/visit"));
exports.default = async (req, res, next) => {
    try {
        let visitsCount = await visit_1.default.findOne();
        if (!visitsCount) {
            let visitsCount = new visit_1.default({
                counter: 1,
            });
            await visitsCount.save();
            next();
        }
        else {
            visitsCount.counter++;
            await visitsCount.save();
            next();
        }
    }
    catch (e) {
        return res.status(500).json("Server error");
    }
};
