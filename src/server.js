import "dotenv/config";
import express from "express";

import helmet from "helmet";
import cookieParser from "cookie-parser";
import cors from "cors"
import hpp from "hpp";

import SmsRoute from "./routes/SmsRoute/route.js";

const app = express();

app.use(express.json());

app.use(helmet())
app.use(cookieParser())
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials : true
}))
app.use(hpp())


app.get("/" , (req , res) => {
    res.json("سرور سامانه چوب ماورا")
})

app.use("/api/v1", SmsRoute);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "همیچین مسیری پیدا نشد",
    path: req.originalUrl,
  });
});

app.listen(process.env.LOCAL_PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log(`server run on port ${process.env.LOCAL_PORT}`);
});
