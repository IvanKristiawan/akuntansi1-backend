import mongoose from "mongoose";

const HartaSchema = new mongoose.Schema({
    hartaLancar: [
        {
            kodeAccount: String,
            namaAccount: String,
            kelompokAccount: String,
            total: {
                type: Number,
                default: 0
            }
        }
    ],
    hartaTetap: [
        {
            kodeAccount: String,
            namaAccount: String,
            kelompokAccount: String,
            total: {
                type: Number,
                default: 0
            }
        }
    ],
    totalHartaLancar: {
        type: Number,
        default: 0
    },
    totalHartaTetap: {
        type: Number,
        default: 0
    },
    totalHarta: {
        type: Number,
        default: 0
    }
})

export default mongoose.model('Harta', HartaSchema)