import express from "express";
import {
    getPerubahanModals,
    getPerubahanModalForDoc,
    getPerubahanModalLast,
    savePerubahanModal,
    updatePerubahanModal,
    deletePerubahanModal
} from "../controllers/PerubahanModalController.js";

const router = express.Router();

router.get("/perubahanModals", getPerubahanModals);
router.get("/perubahanModalForDoc", getPerubahanModalForDoc);
router.get("/perubahanModalLast", getPerubahanModalLast);
router.post("/perubahanModals", savePerubahanModal);
router.patch("/perubahanModals/:id", updatePerubahanModal);
router.delete("/perubahanModals/:id", deletePerubahanModal);

export default router;