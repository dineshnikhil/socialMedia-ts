"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tweet_services_1 = __importDefault(require("../services/tweet-services"));
const tweet_1 = require("../utils/tweet");
const tweetServices = new tweet_services_1.default();
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parsedInput = tweet_1.tweet.safeParse(req.body);
        if (parsedInput.success) {
            const tweet = yield tweetServices.create(parsedInput.data);
            return res.status(201).json({
                data: tweet,
                message: 'successfully created the tweet..!',
                error: {},
            });
        }
        else {
            return res.status(411).json({
                data: {},
                message: 'validation error occur..!',
                error: parsedInput.error,
            });
        }
    }
    catch (error) {
        res.status(400).json({
            data: {},
            message: 'unable to create the tweet.!',
            error: error,
        });
    }
});
exports.default = {
    create,
};
