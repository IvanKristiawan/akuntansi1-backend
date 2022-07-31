import express from "express";
import {
    getLabaRugis,
    getLabaRugiById,
    getLabaRugiLast,
    getLabaRugiTransaksiAll,
    getLabaRugiTransaksi,
    getLabaRugiTransaksiOther,
    saveLabaRugi,
    updateLabaRugi,
    deleteLabaRugi
} from "../controllers/LabaRugiController.js";

const router = express.Router();

router.get("/labaRugis", getLabaRugis);
router.get("/labaRugis/:id", getLabaRugiById);
router.get("/labaRugiLast", getLabaRugiLast);
router.get("/labaRugiTransaksiAll", getLabaRugiTransaksiAll);
router.get("/labaRugiTransaksi/:id", getLabaRugiTransaksi);
router.get("/labaRugiTransaksiOther/:id", getLabaRugiTransaksiOther);
router.post("/labaRugis", saveLabaRugi);
router.patch("/labaRugis/:id", updateLabaRugi);
router.delete("/labaRugis/:id", deleteLabaRugi);

export default router;