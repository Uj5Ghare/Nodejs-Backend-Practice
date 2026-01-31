import mongoose from "mongoose"

const medicalRecordSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Tyeps.ObjectId,
        ref: "Patient",
        required: true
    },
    diagonsedWith: {
        type: String,
        required: true
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    },
    tablets: [
        {
            type: String,
        }
    ]
},{timestamps: true})

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema)
