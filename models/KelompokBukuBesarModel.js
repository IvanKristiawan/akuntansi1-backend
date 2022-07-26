import mongoose from "mongoose";

const KelompokBukuBesarSchema = new mongoose.Schema({
    kode: {
        type: String,
        required: true
    },
    nama: {
        type: String,
        required: true
    },
    jenis: {
        type: String,
        required: true
    },
})

export default mongoose.model('KelompokBukuBesar', KelompokBukuBesarSchema);