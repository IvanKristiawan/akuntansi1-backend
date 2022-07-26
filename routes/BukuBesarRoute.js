import express from "express";
import {
  getBukuBesars,
  getBukuBesarKodeNamaKelompok,
  getBukuBesarById,
  saveBukuBesar,
  updateBukuBesar,
  deleteBukuBesar,
} from "../controllers/BukuBesarController.js";

const router = express.Router();

router.get("/bukuBesars", getBukuBesars);
router.get("/bukuBesarKodeNamaKelompok", getBukuBesarKodeNamaKelompok);
router.get("/bukuBesars/:id", getBukuBesarById);
router.post("/bukuBesars", saveBukuBesar);
router.patch("/bukuBesars/:id", updateBukuBesar);
router.delete("/bukuBesars/:id", deleteBukuBesar);

export default router;
