import express from "express";
import {
  getAJurnalUmums,
  getAJurnalUmumForDoc,
  getAJurnalUmumByNoNota,
  getAJurnalUmumById,
  saveAJurnalUmum,
  updateAJurnalUmum,
  deleteAJurnalUmum,
} from "../controllers/AJurnalUmumController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/aJurnalUmums/:id", getAJurnalUmums);
router.get("/aJurnalUmumForDoc", getAJurnalUmumForDoc);
router.get("/aJurnalUmumByNota/:id", getAJurnalUmumByNoNota);
router.get("/aJurnalUmum/:id", getAJurnalUmumById);
router.post("/aJurnalUmums", verifyAdmin, saveAJurnalUmum);
router.patch("/aJurnalUmums/:id", verifyAdmin, updateAJurnalUmum);
router.delete("/aJurnalUmums/:id", verifyAdmin, deleteAJurnalUmum);

export default router;