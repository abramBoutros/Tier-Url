"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("./index"));
it("should run", () => { });
describe("shorten url api", () => {
    it("GET / ---> redirect url", () => {
        return (0, supertest_1.default)(index_1.default).get("/").expect("Content-Type", /json/).expect(200);
    });
});
