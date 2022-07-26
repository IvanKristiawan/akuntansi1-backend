import mongoose from "mongoose";

const JurnalUmumSchema = new mongoose.Schema({
    noJurnalUmum: {
        type: String,
        required: true
    },
    tanggal: {
        type: String,
        required: true
    },
    totalDebet: {
        type: Number,
        default: 0
    },
    totalKredit: {
        type: Number,
        default: 0
    },
    balance: {
        type: Number,
        default: 0
    }
})

export default mongoose.model('JurnalUmum', JurnalUmumSchema)