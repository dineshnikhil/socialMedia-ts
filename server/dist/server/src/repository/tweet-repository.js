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
const tweet_1 = __importDefault(require("../models/tweet"));
class TweetRepository {
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tweet = yield tweet_1.default.create(data);
                return tweet;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getTweets(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tweets = yield tweet_1.default.find({ userId: userId });
                return tweets;
            }
            catch (error) {
                console.log('something went wrong in the repository layer.!');
                console.log(error);
            }
        });
    }
}
exports.default = TweetRepository;
