import mongoose from "mongoose";

const PerubahanModalSchema = new mongoose.Schema({
    modalSaham: {
        type: Number,
        default: 0
    },
    labaBersih: {
        type: Number,
        default: 0
    },
    total: {
        type: Number,
        default: 0
    }
})

export default mongoose.model('PerubahanModal', PerubahanModalSchema)