import mongoose from "mongoose";

const AJurnalUmumSchema = new mongoose.Schema({
    noJurnalUmum: {
        type: String,
        required: true
    },
    tanggal: {
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
    keterangan: {
        type: String
    },
    debet: {
        type: Number
    },
    kredit: {
        type: Number
    }
})

export default mongoose.model('AJurnalUmum', AJurnalUmumSchema)