import express from "express";
import {
  getKelompokBukuBesars,
  getKelompokBukuBesarKodeNama,
  getKelompokBukuBesarById,
  saveKelompokBukuBesar,
  updateKelompokBukuBesar,
  deleteKelompokBukuBesar,
} from "../controllers/KelompokBukuBesarController.js";

const router = express.Router();

router.get("/kelompokBukuBesars", getKelompokBukuBesars);
router.get("/kelompokBukuBesarKodeNama", getKelompokBukuBesarKodeNama);
router.get("/kelompokBukuBesars/:id", getKelompokBukuBesarById);
router.post("/kelompokBukuBesars", saveKelompokBukuBesar);
router.patch("/kelompokBukuBesars/:id", updateKelompokBukuBesar);
router.delete("/kelompokBukuBesars/:id", deleteKelompokBukuBesar);

export default router;
