import mongoose from "mongoose";

const LaporanBukuBesarSchema = new mongoose.Schema({
    kodeBukuBesar: {
        type: String,
        required: true
    },
    tanggal: {
        type: String,
        required: true
    },
    noJurnalUmum: {
        type: String,
        required: true
    },
    keterangan: {
        type: String
    },
    debet: {
        type: Number,
        default: 0
    },
    kredit: {
        type: Number,
        default: 0
    }
}, {timestamps: true})

export default mongoose.model('LaporanBukuBesar', LaporanBukuBesarSchema);