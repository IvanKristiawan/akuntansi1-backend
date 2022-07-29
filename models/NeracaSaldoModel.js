import mongoose from "mongoose";

const NeracaSaldoSchema = new mongoose.Schema({
    tanggal: {
        type: String,
        required: true
    },
    jenisAccount: {
        type: String,
        required: true
    },
    kodeAccount: {
        type: String,
        required: true
    },
    namaAccount: {
        type: String,
        required: true
    },
    debet: {
        type: Number
    },
    kredit: {
        type: Number
    }
})

export default mongoose.model('NeracaSaldo', NeracaSaldoSchema)