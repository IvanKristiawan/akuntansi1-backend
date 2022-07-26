import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
const PORT = process.env.PORT || 5000;
// Import Routes
import KelompokBukuBesarRoute from "./routes/KelompokBukuBesarRoute.js";
import BukuBesarRoute from "./routes/BukuBesarRoute.js";
import JurnalUmumRoute from "./routes/JurnalUmumRoute.js";
import AJurnalUmumRoute from "./routes/AJurnalUmumRoute.js";
import LaporanBukuBesarRoute from "./routes/LaporanBukuBesarRoute.js";
import NeracaSaldoRoute from "./routes/NeracaSaldoRoute.js";
import LabaRugiRoute from "./routes/LabaRugiRoute.js";
import PerubahanModalRoute from "./routes/PerubahanModalRoute.js";
import HartaRoute from "./routes/HartaRoute.js";
import KewajibanRoute from "./routes/KewajibanRoute.js";
import NeracaRoute from "./routes/NeracaRoute.js";
import UserRoute from "./routes/UserRoute.js";
import AuthRoute from "./routes/AuthRoute.js";

const app = express();
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("DBConnection Successfull!"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(cookieParser());
app.use(express.json());
// Use Routes
app.use(KelompokBukuBesarRoute);
app.use(BukuBesarRoute);
app.use(JurnalUmumRoute);
app.use(AJurnalUmumRoute);
app.use(LaporanBukuBesarRoute);
app.use(NeracaSaldoRoute);
app.use(LabaRugiRoute);
app.use(PerubahanModalRoute);
app.use(HartaRoute);
app.use(KewajibanRoute);
app.use(NeracaRoute);
app.use("/users", UserRoute);
app.use("/auth", AuthRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})