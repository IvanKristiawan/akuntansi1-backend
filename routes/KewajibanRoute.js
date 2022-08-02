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

const router = express.Router();

router.get("/kewajibans", getKewajibans);
router.get("/kewajibanLast", getKewajibanLast);
router.get("/kewajibanAll", getKewajibanAll);
router.get("/kewajibanAllForDoc", getKewajibanAllForDoc);
router.get("/kewajiban/:id", getKewajiban);
router.get("/kewajibanOther/:id", getKewajibanOther);
router.post("/kewajibans", saveKewajiban);
router.patch("/kewajibans/:id", updateKewajiban);
router.delete("/kewajibans/:id", deleteKewajiban);

export default router;