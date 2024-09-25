import express, { Request, Response} from 'express';
import cors from 'cors';
import dotenv from "dotenv";

dotenv.config();
const whitelist = process.env.WHITELIST;

const corsOptions: cors.CorsOptions = {
  origin: whitelist,
  credentials: true,
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json()); // json parse

app.listen(process.env.PORT, () => {
    console.log('Listening');
});

app.post('/', (req: Request, res: Response)=>{
  const insertHello = req.body.msg + " + Hello wolrd!";
  res.json({ msg: insertHello });
});
//출처: https://inpa.tistory.com/entry/NODE-📚-CORS-설정하기-cors-모듈 [Inpa Dev 👨‍💻:티스토리]
