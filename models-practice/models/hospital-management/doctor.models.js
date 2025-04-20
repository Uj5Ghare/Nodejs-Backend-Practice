import mongoose from "mongoose"

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    qaulification: {
        type: String,
        required: true
    },
    experientInYears: {
        type: Number,
        default: 0,
        required: true
    },
    worksInHopitals: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital"
        },
    ],
},{timestamps: true})

export const Doctor = mongoose.model("Doctor", doctorSchema)