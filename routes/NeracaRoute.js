import express from "express";
import {
    getNeracas,
    getNeracaLast,
    saveNeraca,
    updateNeraca,
    deleteNeraca
} from "../controllers/NeracaController.js";

const router = express.Router();

router.get("/neracas", getNeracas);
router.get("/neracaLast", getNeracaLast);
router.post("/neracas", saveNeraca);
router.patch("/neracas/:id", updateNeraca);
router.delete("/neracas/:id", deleteNeraca);

export default router;