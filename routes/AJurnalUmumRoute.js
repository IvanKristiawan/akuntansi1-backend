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

const router = express.Router();

router.get("/aJurnalUmums/:id", getAJurnalUmums);
router.get("/aJurnalUmumForDoc", getAJurnalUmumForDoc);
router.get("/aJurnalUmumByNota/:id", getAJurnalUmumByNoNota);
router.get("/aJurnalUmums/:id", getAJurnalUmumById);
router.post("/aJurnalUmums", saveAJurnalUmum);
router.patch("/aJurnalUmums/:id", updateAJurnalUmum);
router.delete("/aJurnalUmums/:id", deleteAJurnalUmum);

export default router;