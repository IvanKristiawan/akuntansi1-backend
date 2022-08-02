import express from "express";
import {
  getJurnalUmums,
  getJurnalUmumById,
  saveJurnalUmum,
  updateJurnalUmum,
  deleteJurnalUmum,
} from "../controllers/JurnalUmumController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/jurnalUmums", getJurnalUmums);
router.get("/jurnalUmums/:id", getJurnalUmumById);
router.post("/jurnalUmums", verifyAdmin, saveJurnalUmum);
router.patch("/jurnalUmums/:id", verifyAdmin, updateJurnalUmum);
router.delete("/jurnalUmums/:id", verifyAdmin, deleteJurnalUmum);

export default router;
