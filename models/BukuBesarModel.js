import mongoose from "mongoose";

const BukuBesarSchema = new mongoose.Schema({
    kode: {
        type: String,
        required: true
    },
    nama: {
        type: String,
        required: true
    },
    kelompok: {
        type: String,
        required: true
    },
    jenisSaldo: {
        type: String,
        required: true
    },
    jenis: {
        type: String,
        required: true
    },
})

export default mongoose.model('BukuBesar', BukuBesarSchema);