import express from "express";
import { PORT } from "./config/index.js";
import { connectDB } from "./db/db.js";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("App is working...")
});

connectDB.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    });
})