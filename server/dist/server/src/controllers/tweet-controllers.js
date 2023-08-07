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
const src_1 = require("../../../common/src");
const tweetServices = new tweet_services_1.default();
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resFromUser = {
            content: req.body.content,
            userId: req.headers['userId'],
        };
        const parsedInput = src_1.tweet.safeParse(resFromUser);
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
        return res.status(400).json({
            data: {},
            message: 'unable to create the tweet.!',
            error: error,
        });
    }
});
const getTweets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userIdFromClient = req.headers['userId'];
        const tweets = yield tweetServices.getTweets(userIdFromClient);
        return res.status(200).json({
            tweets: tweets,
            message: 'successfully fetched the tweets.!',
            error: {},
        });
    }
    catch (error) {
        return res.status(400).json({
            data: {},
            message: 'unable to fetch the tweets.!',
            error: error,
        });
    }
});
exports.default = {
    create,
    getTweets,
};
