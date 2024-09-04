import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import dotenv from 'dotenv';
import testRoute from "./routes/test.route.js"
import userRoute from "./routes/user.route.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8800;

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/api/post', postRoute);
app.use('/api/auth', authRoute);
app.use('/api/test', testRoute);
app.use('/api/user', userRoute);

app.listen(port, () => {
   console.log("Server is running !");
});
