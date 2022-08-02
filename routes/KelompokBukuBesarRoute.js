import express from "express";
import {
  getKelompokBukuBesars,
  getKelompokBukuBesarKodeNama,
  getKelompokBukuBesarById,
  saveKelompokBukuBesar,
  updateKelompokBukuBesar,
  deleteKelompokBukuBesar,
} from "../controllers/KelompokBukuBesarController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/kelompokBukuBesars", getKelompokBukuBesars);
router.get("/kelompokBukuBesarKodeNama", getKelompokBukuBesarKodeNama);
router.get("/kelompokBukuBesars/:id", getKelompokBukuBesarById);
router.post("/kelompokBukuBesars", verifyAdmin, saveKelompokBukuBesar);
router.patch("/kelompokBukuBesars/:id", verifyAdmin, updateKelompokBukuBesar);
router.delete("/kelompokBukuBesars/:id", verifyAdmin, deleteKelompokBukuBesar);

export default router;
