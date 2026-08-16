import express from "express";
const router = express.Router();
import { Todo } from "../db/db.js";

router.get("/", async (req, res) => {
    try {
        const todos = await Todo.find({});
        if (!todos) return res.status.json({ message: "Todo not found" });

        return res.json({
            data: todos,
            message: "Todos fetched successfully"
        });
    } catch (error) {
        console.log(`Error something went wrong ${error.message}`)
        return res.json({
            message: "Error something went wrong"
        });
    }
});

router.get("/id", async (req, res) => {
    try {
        const todoId = req.params.id;
        const todos = await TodoModel.findOne({ _id: todoId });
        if (!todos) return res.status.json({ message: "Todo not found" });

        return res.json({
            data: todos,
            message: "Todos fetched successfully"
        });
    } catch (error) {
        console.log(`Error something went wrong ${error.message}`)
        return res.json({
            message: "Error something went wrong"
        });
    }
});


router.post("/", async (req, res) => {
    try {
        const { title, description, completed } = req.body;
        if (!title || !description) return res.json({ message: "Invalid inputs" });

        const todos = await TodoModel({ title, description, completed });
        await todos.save();

        return res.json({
            data: todos,
            message: "Todo created successfully"
        });
    } catch (error) {
        console.log(`Error something went wrong ${error.message}`)
        return res.json({
            message: "Error something went wrong"
        });
    }
});

router.put("/id", async (req, res) => {
    try {
        const todoId = req.params.id;
        const todo = await Todo.findById({ _id: todoId });
        if (!todo) return res.status.json({ message: "Todo not found" });

        const { title, description, completed } = req.body;
        if (!title || !description ) return res.json({ message: "Invalid inputs" });

        todo.title = title;
        todo.description = description;
        todo.completed = completed;

        const updatedTodo = await todo.save();

        return res.json({
            data: updatedTodo,
            message: "Todo updated successfully"
        });
    } catch (error) {
        console.log(`Error something went wrong ${error.message}`)
        return res.json({
            message: "Error something went wrong"
        });
    }
});

router.delete("/id", async (req, res) => {
    try {
        const todoId = req.params.id;
        const todo = await Todo.findById({ _id: todoId });
        if (!todo) return res.status.json({ message: "Todo not found" });

        const deletedTodo = await Todo.findByIdAndDelete({ todoId });

        return res.json({
            data: deletedTodo,
            message: "Todo deleted successfully"
        });
    } catch (error) {
        console.log(`Error something went wrong ${error.message}`)
        return res.json({
            message: "Error something went wrong"
        });
    }
});

export { router };