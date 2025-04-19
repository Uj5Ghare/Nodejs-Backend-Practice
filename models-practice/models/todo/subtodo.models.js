import mongoose from "mongoose"

const subTodoSchema = mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    complete: {
        type: String,
        defualt: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true});

export const subTodo = mongoose.model("SubTodo", subTodoSchema )