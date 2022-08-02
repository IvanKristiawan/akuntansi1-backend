import express from "express";
import {
    getNeracas,
    getNeracaLast,
    saveNeraca,
    updateNeraca,
    deleteNeraca
} from "../controllers/NeracaController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/neracas", getNeracas);
router.get("/neracaLast", getNeracaLast);
router.post("/neracas", verifyAdmin, saveNeraca);
router.patch("/neracas/:id", verifyAdmin, updateNeraca);
router.delete("/neracas/:id", verifyAdmin, deleteNeraca);

export default router;