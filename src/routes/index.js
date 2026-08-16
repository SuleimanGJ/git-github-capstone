import express from "express";
const router = express.Router();
import { Todo } from "../db/db.js";

router.get("/", async (req, res) => {
    const todos = await Todo.find({});
    return res.json({
        data: todos,
        message: "Todos fetched successfully"
    });
});

router.get("/id", async (req, res) => {
    const todoId = req.params.id;
    const todos = await TodoModel.findOne({_id: todoId});
    return res.json({
        data: todos,
        message: "Todos fetched successfully"
    });
});

export { router };