import express from "express";
import {
    getPerubahanModals,
    getPerubahanModalForDoc,
    getPerubahanModalLast,
    savePerubahanModal,
    updatePerubahanModal,
    deletePerubahanModal
} from "../controllers/PerubahanModalController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/perubahanModals", getPerubahanModals);
router.get("/perubahanModalForDoc", getPerubahanModalForDoc);
router.get("/perubahanModalLast", getPerubahanModalLast);
router.post("/perubahanModals", verifyAdmin, savePerubahanModal);
router.patch("/perubahanModals/:id", verifyAdmin, updatePerubahanModal);
router.delete("/perubahanModals/:id", verifyAdmin, deletePerubahanModal);

export default router;