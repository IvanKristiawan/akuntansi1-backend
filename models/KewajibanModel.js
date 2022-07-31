import mongoose from "mongoose";

const KewajibanSchema = new mongoose.Schema({
    kewajiban: [
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
    totalKewajiban: {
        type: Number,
        default: 0
    }
})

export default mongoose.model('Kewajiban', KewajibanSchema)