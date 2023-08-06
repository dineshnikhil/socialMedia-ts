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
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_repository_1 = __importDefault(require("../repository/user-repository"));
class UserServices {
    constructor() {
        this.userRepository = new user_repository_1.default();
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userRepository.create(data);
                return user;
            }
            catch (error) {
                console.log('something went wrong in the services layer.!');
                console.log(error);
            }
        });
    }
    signin(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userRepository.getUser(userData.username);
                if (!user) {
                    throw { error: 'user with this username not exsists.!' };
                }
                const passwordCheck = yield this.checkPassword(userData.password, user.password);
                if (!passwordCheck) {
                    throw { error: 'entered password is incorrect.!' };
                }
                const token = jsonwebtoken_1.default.sign({ id: user._id }, 'thisisit', { expiresIn: '1h' });
                return token;
            }
            catch (error) {
                console.log('something went wrong in the services layer.!');
                console.log(error);
            }
        });
    }
    checkPassword(userInputPassword, encryptedPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return bcrypt_1.default.compareSync(userInputPassword, encryptedPassword);
            }
            catch (error) {
                console.log('something went wrong in the services layer.!');
                console.log(error);
            }
        });
    }
}
exports.default = UserServices;
