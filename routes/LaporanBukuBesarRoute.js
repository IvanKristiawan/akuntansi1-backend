import express from "express";
import {
    getLaporanBukuBesars,
    getLaporanBukuBesarByKodeBuku,
    getLaporanBukuBesarLast,
    getLaporanBukuBesarById,
    saveLaporanBukuBesar,
    deleteLaporanBukuBesar
} from "../controllers/LaporanBukuBesarController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/laporanBukuBesars", getLaporanBukuBesars);
router.get("/laporanBukuBesarLast/:id", getLaporanBukuBesarLast);
router.get("/laporanBukuBesarByKodeBuku/:id", getLaporanBukuBesarByKodeBuku);
router.get("/laporanBukuBesars/:id", getLaporanBukuBesarById);
router.post("/laporanBukuBesars", verifyAdmin, saveLaporanBukuBesar);
router.delete("/laporanBukuBesars/:id", verifyAdmin, deleteLaporanBukuBesar);

export default router;
