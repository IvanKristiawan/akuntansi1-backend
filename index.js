import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 5000;
// Import Routes
import KelompokBukuBesarRoute from "./routes/KelompokBukuBesarRoute.js";
import BukuBesarRoute from "./routes/BukuBesarRoute.js";
import JurnalUmumRoute from "./routes/JurnalUmumRoute.js";
import AJurnalUmumRoute from "./routes/AJurnalUmumRoute.js";
import LaporanBukuBesarRoute from "./routes/LaporanBukuBesarRoute.js";

const app = express();
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("DBConnection Successfull!"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
// Use Routes
app.use(KelompokBukuBesarRoute);
app.use(BukuBesarRoute);
app.use(JurnalUmumRoute);
app.use(AJurnalUmumRoute);
app.use(LaporanBukuBesarRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})