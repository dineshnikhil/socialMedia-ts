"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tweet = void 0;
const zod_1 = require("zod");
exports.tweet = zod_1.z.object({
    content: zod_1.z.string(),
    email: zod_1.z.string(),
});
