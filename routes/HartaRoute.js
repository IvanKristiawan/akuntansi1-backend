import express from "express";
import {
    getHartas,
    getHartaLast,
    getHartaLancarAll,
    getHartaLancar,
    getHartaLancarOther,
    getHartaTetapAll,
    getHartaTetap,
    getHartaTetapOther,
    saveHarta,
    updateHarta,
    deleteHarta
} from "../controllers/HartaController.js";

const router = express.Router();

router.get("/hartas", getHartas);
router.get("/hartaLast", getHartaLast);
router.get("/hartaLancarAll", getHartaLancarAll);
router.get("/hartaLancar/:id", getHartaLancar);
router.get("/hartaLancarOther/:id", getHartaLancarOther);
router.get("/hartaTetapAll", getHartaTetapAll);
router.get("/hartaTetap/:id", getHartaTetap);
router.get("/hartaTetapOther/:id", getHartaTetapOther);
router.post("/hartas", saveHarta);
router.patch("/hartas/:id", updateHarta);
router.delete("/hartas/:id", deleteHarta);

export default router;