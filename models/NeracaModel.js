import mongoose from "mongoose";

const NeracaSchema = new mongoose.Schema({
    harta: {
        type: Schema.Types.ObjectId,
        ref: "Harta"
    },
    kewajiban: {
        type: Schema.Types.ObjectId,
        ref: "Kewajiban"
    },
    modal: {
        type: Schema.Types.ObjectId,
        ref: "PerubahanModal"
    },
    total: {
        type: Number,
        default: 0
    }
})

export default mongoose.model('Neraca', NeracaSchema)