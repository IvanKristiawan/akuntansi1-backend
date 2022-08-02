import express from "express";
import {
    getNeracaSaldos,
    getNeracaSaldoForDoc,
    getNeracaSaldoLast,
    getNeracaSaldoById,
    saveNeracaSaldo,
    updateNeracaSaldo,
    deleteNeracaSaldo
} from "../controllers/NeracaSaldoController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/neracaSaldos", getNeracaSaldos);
router.get("/neracaSaldoForDoc", getNeracaSaldoForDoc);
router.get("/neracaSaldos/:id", getNeracaSaldoById);
router.get("/neracaSaldoLast/:id", getNeracaSaldoLast);
router.post("/neracaSaldos", verifyAdmin, saveNeracaSaldo);
router.patch("/neracaSaldos/:id", verifyAdmin, updateNeracaSaldo);
router.delete("/neracaSaldos/:id", verifyAdmin, deleteNeracaSaldo);

export default router;