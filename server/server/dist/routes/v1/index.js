"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tweet_controllers_1 = __importDefault(require("../../controllers/tweet-controllers"));
const router = express_1.default.Router();
router.post('/tweet', tweet_controllers_1.default.create);
exports.default = router;
