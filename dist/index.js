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
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
const tweet_1 = __importDefault(require("./models/tweet"));
const port = 3000;
const createAndRunServer = () => {
    const app = (0, express_1.default)();
    app.get('/', (req, res) => {
        res.send('hello this is my firt typescript server..!');
    });
    app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
        console.log('server is running on the port: ', port);
        (0, database_1.default)();
        const tweet = yield tweet_1.default.create({
            content: 'fourth tweet..!',
            email: 'a@b.com',
        });
        console.log(tweet);
    }));
};
createAndRunServer();
