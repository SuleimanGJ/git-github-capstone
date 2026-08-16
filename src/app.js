import express from "express";
import { todoRouter } from "./routes/index.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("App is working...")
});

app.use("/api/todo", todoRouter);


export default app;