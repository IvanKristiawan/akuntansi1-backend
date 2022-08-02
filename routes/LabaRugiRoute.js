import express from "express";
import {
    getLabaRugis,
    getLabaRugiById,
    getLabaRugiLast,
    getLabaRugiTotal,
    getLabaRugiTransaksiAll,
    getLabaRugiTransaksiAllForDoc,
    getLabaRugiTransaksi,
    getLabaRugiTransaksiOther,
    saveLabaRugi,
    updateLabaRugi,
    deleteLabaRugi
} from "../controllers/LabaRugiController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/labaRugis", getLabaRugis);
router.get("/labaRugis/:id", getLabaRugiById);
router.get("/labaRugiTotal", getLabaRugiTotal);
router.get("/labaRugiLast", getLabaRugiLast);
router.get("/labaRugiTransaksiAll", getLabaRugiTransaksiAll);
router.get("/labaRugiTransaksiAllForDoc", getLabaRugiTransaksiAllForDoc);
router.get("/labaRugiTransaksi/:id", getLabaRugiTransaksi);
router.get("/labaRugiTransaksiOther/:id", getLabaRugiTransaksiOther);
router.post("/labaRugis", verifyAdmin, saveLabaRugi);
router.patch("/labaRugis/:id", verifyAdmin, updateLabaRugi);
router.delete("/labaRugis/:id", verifyAdmin, deleteLabaRugi);

export default router;