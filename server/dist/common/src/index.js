"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInUser = exports.createUser = exports.tweet = void 0;
const zod_1 = require("zod");
exports.tweet = zod_1.z.object({
    content: zod_1.z.string(),
    userId: zod_1.z.string(),
});
exports.createUser = zod_1.z.object({
    username: zod_1.z.string(),
    email: zod_1.z.string().email('Send the valid email..!'),
    password: zod_1.z.string(),
});
exports.signInUser = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string(),
});
