"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tweet_controllers_1 = __importDefault(require("../../controllers/tweet-controllers"));
const user_controllers_1 = __importDefault(require("../../controllers/user-controllers"));
const authenticate_1 = __importDefault(require("../../middlewares/authenticate"));
const router = express_1.default.Router();
router.post('/tweet', authenticate_1.default, tweet_controllers_1.default.create);
router.get('/tweet', authenticate_1.default, tweet_controllers_1.default.getTweets);
router.post('/signup', user_controllers_1.default.create);
router.get('/signin', user_controllers_1.default.signIn);
exports.default = router;
