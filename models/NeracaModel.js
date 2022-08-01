import mongoose from "mongoose";

const NeracaSchema = new mongoose.Schema({
    idHarta: {
        type: String
    },
    idKewajiban: {
        type: String
    },
    idModal: {
        type: String
    }
})

export default mongoose.model('Neraca', NeracaSchema)