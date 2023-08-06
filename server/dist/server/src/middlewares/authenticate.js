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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const headerAuth = req.headers.authorization;
        if (!headerAuth) {
            return res.status(401).json({
                error: 'no token send..!',
            });
        }
        const autheResData = jsonwebtoken_1.default.verify(headerAuth, 'thisisit');
        if (!autheResData) {
            res.status(402).json({
                error: 'invalid token..!',
            });
        }
        req.headers['userId'] = autheResData.id;
        next();
    }
    catch (error) {
        console.log('something went wrong in the authentication..!');
        console.log(error);
    }
});
exports.default = authenticate;
