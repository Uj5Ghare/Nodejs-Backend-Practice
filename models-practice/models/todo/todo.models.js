import mongoose from "mongoose"

const todoScema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        defualt: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subTodos: {
        type: mongoose.Schema.Types.ObjectId,
        ref: subTodo
    }
}, {timestamps: true});

export const Todo = mongoose.model("Todo", todoScema )