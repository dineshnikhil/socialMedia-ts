"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// defining the tweet model schema.
const tweetSchema = new mongoose_1.default.Schema({
    content: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
    },
}, { timestamps: true });
// creating the tweet model.
const Tweet = mongoose_1.default.model('tweet', tweetSchema);
exports.default = Tweet;
