import express from "express"
import kleur from "kleur"
import authRouter from "./routes/auth.route"
import cors from "@/middleware/cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(express.json());
app.use(cors);
app.use(express.json());
app.use(cookieParser());

const port = process.env.BACKEND_PORT || 4000;

app.use("/", authRouter);

app.listen(port, () => {
    console.log(`Server is running on ${kleur.white().bold(`http://127.0.0.1:${port}`)}`);
});
