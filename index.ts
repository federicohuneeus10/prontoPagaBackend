import express from "express";
import authRouter from "./src/routes/auth.routes";
import scoreRouter from "./src/routes/score.routes";

const app = express();

app.use(express.json());
app.use("/auth", authRouter);
app.use("/score", scoreRouter);

app.listen(3000, () => console.log("hi"));
