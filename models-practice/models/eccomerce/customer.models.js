import mongoose from "mongoose"

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    
}, {timestamps: true})

const Customer = mongoose.model("Customer", customerSchema)