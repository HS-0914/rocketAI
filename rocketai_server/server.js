import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";

dotenv.config();
const whitelist = process.env.WHITELIST;

const corsOptions = {
  origin: (origin, callback) => { 
    if (whitelist.indexOf(origin) !== -1) { // 만일 whitelist 배열에 origin인자가 있을 경우
      callback(null, true); // cors 허용
    } else {
      callback(new Error("Not Allowed Origin!")); // cors 비허용
    }
  },
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json()); // json parse

app.listen(process.env.PORT, () => {
    console.log('Listening');
});

app.post('/', (req, res)=>{
    const insertHello = req.body.msg + " + Hello wolrd!";
    res.json({ msg: insertHello });
});
//출처: https://inpa.tistory.com/entry/NODE-📚-CORS-설정하기-cors-모듈 [Inpa Dev 👨‍💻:티스토리]
