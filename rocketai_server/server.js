"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const whitelist = process.env.WHITELIST;
const corsOptions = {
    origin: whitelist,
    credentials: true,
};
const app = (0, express_1.default)();
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json()); // json parse
app.listen(process.env.PORT, () => {
    console.log('Listening');
});
app.post('/', (req, res) => {
    const insertHello = req.body.msg + " + Hello wolrd!";
    res.json({ msg: insertHello });
});
//출처: https://inpa.tistory.com/entry/NODE-📚-CORS-설정하기-cors-모듈 [Inpa Dev 👨‍💻:티스토리]
