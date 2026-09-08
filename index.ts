import express from "express";
import cors from "cors";
import authRouter from "./src/routes/auth.routes";
import scoreRouter from "./src/routes/score.routes";

const app = express();

app.use(cors({ origin: "http://localhost:5176" }));
app.use(express.json());
app.use("/auth", authRouter);
app.use("/score", scoreRouter);

app.listen(3000, () => console.log("hi"));
