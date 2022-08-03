import express from "express";
import {
  getJurnalUmums,
  getJurnalUmumById,
  saveJurnalUmum,
  updateJurnalUmum,
  deleteJurnalUmum,
} from "../controllers/JurnalUmumController.js";

const router = express.Router();

router.get("/jurnalUmums", getJurnalUmums);
router.get("/jurnalUmums/:id", getJurnalUmumById);
router.post("/jurnalUmums", saveJurnalUmum);
router.patch("/jurnalUmums/:id", updateJurnalUmum);
router.delete("/jurnalUmums/:id", deleteJurnalUmum);

export default router;
