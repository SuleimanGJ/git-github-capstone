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
    const todos = await TodoModel.findOne({ _id: todoId });
    return res.json({
        data: todos,
        message: "Todos fetched successfully"
    });
});


router.post("/", async (req, res) => {
    const { title, description, completed } = req.body;

    const todos = await TodoModel({ title, description, completed });
    await todos.save();

    return res.json({
        data: todos,
        message: "Todo created successfully"
    });
});

router.put("/id", async (req, res) => {
    const todoId = req.params.id;
    const todo = await Todo.findById({ _id: todoId });

    const { title, description, completed } = req.body;

    todo.title = title;
    todo.description = description;
    todo.completed = completed;

    const updatedTodo = await todo.save();

    return res.json({
        data: updatedTodo,
        message: "Todo updated successfully"
    });
});

router.delete("/id", async (req, res) => {
    const todoId = req.params.id;
    const todo = await Todo.findById({ _id: todoId });

    const deletedTodo = await Todo.findByIdAndDelete({ todoId });

    return res.json({
        data: deletedTodo,
        message: "Todo deleted successfully"
    });
});

export { router };