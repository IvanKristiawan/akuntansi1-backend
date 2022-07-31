import mongoose from "mongoose";

const LabaRugiSchema = new mongoose.Schema({
    tanggal: {
        type: String,
        required: true
    },
    transaksi: [
        {
            idNeracaSaldo: String,
            kodeAccount: String,
            namaAccount: String,
            kelompokAccount: String,
            total: {
                type: Number,
                default: 0
            }
        }
    ],
    totalPendapatan: {
        type: Number,
        default: 0
    },
    totalHPP: {
        type: Number,
        default: 0
    },
    totalBebanOperasional: {
        type: Number,
        default: 0
    },
    labaKotor: {
        type: Number,
        default: 0
    },
    labaBersih: {
        type: Number,
        default: 0
    },
})

export default mongoose.model('LabaRugi', LabaRugiSchema)