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

const router = express.Router();

router.get("/neracaSaldos", getNeracaSaldos);
router.get("/neracaSaldoForDoc", getNeracaSaldoForDoc);
router.get("/neracaSaldos/:id", getNeracaSaldoById);
router.get("/neracaSaldoLast/:id", getNeracaSaldoLast);
router.post("/neracaSaldos", saveNeracaSaldo);
router.patch("/neracaSaldos/:id", updateNeracaSaldo);
router.delete("/neracaSaldos/:id", deleteNeracaSaldo);

export default router;