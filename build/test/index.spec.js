"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("index"));
const app = (0, index_1.default)();
describe("server checks", function () {
    it("server instantiated without error", function (done) {
        (0, supertest_1.default)(app).get("/").expect(200, done);
    });
});
