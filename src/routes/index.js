import express from "express";
const todoRouter = express.Router();
import { Todo } from "../db/db.js";

todoRouter.get("/", async (req, res) => {
    try {
        const todos = await Todo.find({});
        if (!todos) return res.status(404).json({ message: "Todo not found" });

        return res.status(200).json({
            data: todos,
            message: "Todos fetched successfully"
        });
    } catch (error) {
        console.log(`Error something went wrong ${error.message}`)
        return res.status(500).json({
            message: "Error something went wrong"
        });
    }
});

todoRouter.get("/:id", async (req, res) => {
    try {
        const todoId = req.params.id;
        const todos = await TodoModel.findOne({ _id: todoId });
        if (!todos) return res.status(404).json({ message: "Todo not found" });

        return res.status(200).json({
            data: todos,
            message: "Todos fetched successfully"
        });
    } catch (error) {
        console.log(`Error something went wrong ${error.message}`)
        return res.status(500).json({
            message: "Error something went wrong"
        });
    }
});


todoRouter.post("/", async (req, res) => {
    try {
        const { title, description, completed } = req.body;
        if (!title || !description) return res.status(400).json({ message: "Invalid inputs" });

        const todos = await Todo({ title, description, completed });
        await todos.save();

        return res.status(201).json({
            data: todos,
            message: "Todo created successfully"
        });
    } catch (error) {
        console.log(`Error something went wrong ${error.message}`)
        return res.status(500).json({
            message: "Error something went wrong"
        });
    }
});

todoRouter.put("/:id", async (req, res) => {
    try {
        const todoId = req.params.id;
        const todo = await Todo.findById({ todoId });
        if (!todo) return res.status(404).json({ message: "Todo not found" });

        const { title, description, completed } = req.body;
        if (!title || !description) return res.status(400).json({ message: "Invalid inputs" });

        todo.title = title;
        todo.description = description;
        todo.completed = completed;

        const updatedTodo = await todo.save();

        return res.status(200).json({
            data: updatedTodo,
            message: "Todo updated successfully"
        });
    } catch (error) {
        console.log(`Error something went wrong ${error.message}`)
        return res.status(500).json({
            message: "Error something went wrong"
        });
    }
});

todoRouter.delete("/:id", async (req, res) => {
    try {
        const todoId = req.params.id;
        const todo = await Todo.findById({ _id: todoId });
        if (!todo) return res.status(404).json({ message: "Todo not found" });

        const deletedTodo = await Todo.findByIdAndDelete( todoId );

        return res.status(200).json({
            data: deletedTodo,
            message: "Todo deleted successfully"
        });
    } catch (error) {
        console.log(`Error something went wrong ${error.message}`)
        return res.status(500).json({
            message: "Error something went wrong"
        });
    }
});

export { todoRouter };