import express from "express";
import {
    getLaporanBukuBesars,
    getLaporanBukuBesarByKodeBuku,
    getLaporanBukuBesarLast,
    getLaporanBukuBesarById,
    saveLaporanBukuBesar,
    deleteLaporanBukuBesar
} from "../controllers/LaporanBukuBesarController.js";

const router = express.Router();

router.get("/laporanBukuBesars", getLaporanBukuBesars);
router.get("/laporanBukuBesarLast/:id", getLaporanBukuBesarLast);
router.get("/laporanBukuBesarByKodeBuku/:id", getLaporanBukuBesarByKodeBuku);
router.get("/laporanBukuBesars/:id", getLaporanBukuBesarById);
router.post("/laporanBukuBesars", saveLaporanBukuBesar);
router.delete("/laporanBukuBesars/:id", deleteLaporanBukuBesar);

export default router;
