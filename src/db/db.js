import mongoose from "mongoose";
import { MONGO_URI } from "../config/index.js";


const connectDB = async() => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("✅ MongoDB connected using Mongoose");
    } catch (error) {
        console.error("❌ MongoDB connection error:", error.message);
        process.exit(1);
    }
}

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const TodoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    userId: { type: ObjectId, ref: "User" }
}, {timestamps: true});

const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true,
        trim: true,
    },
    password: {
        type: String,
    }
}, {timestamps: true});

const Todo = mongoose.model("Todo", TodoSchema);
const User = mongoose.model("User", UserSchema);

export { connectDB, Todo, User };