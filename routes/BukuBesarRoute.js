import express from "express";
import {
  getBukuBesars,
  getBukuBesarKodeNamaKelompok,
  getBukuBesarById,
  saveBukuBesar,
  updateBukuBesar,
  deleteBukuBesar,
} from "../controllers/BukuBesarController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/bukuBesars", getBukuBesars);
router.get("/bukuBesarKodeNamaKelompok", getBukuBesarKodeNamaKelompok);
router.get("/bukuBesars/:id", getBukuBesarById);
router.post("/bukuBesars", verifyAdmin, saveBukuBesar);
router.patch("/bukuBesars/:id", verifyAdmin, updateBukuBesar);
router.delete("/bukuBesars/:id", verifyAdmin, deleteBukuBesar);

export default router;
