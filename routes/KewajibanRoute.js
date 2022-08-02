import express from "express";
import {
    getKewajibans,
    getKewajibanLast,
    getKewajibanAll,
    getKewajibanAllForDoc,
    getKewajiban,
    getKewajibanOther,
    saveKewajiban,
    updateKewajiban,
    deleteKewajiban
} from "../controllers/KewajibanController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/kewajibans", getKewajibans);
router.get("/kewajibanLast", getKewajibanLast);
router.get("/kewajibanAll", getKewajibanAll);
router.get("/kewajibanAllForDoc", getKewajibanAllForDoc);
router.get("/kewajiban/:id", getKewajiban);
router.get("/kewajibanOther/:id", getKewajibanOther);
router.post("/kewajibans", verifyAdmin, saveKewajiban);
router.patch("/kewajibans/:id", verifyAdmin, updateKewajiban);
router.delete("/kewajibans/:id", verifyAdmin, deleteKewajiban);

export default router;