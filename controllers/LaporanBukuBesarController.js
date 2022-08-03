import LaporanBukuBesar from "../models/LaporanBukuBesarModel.js";

export const getLaporanBukuBesars = async (req, res) => {
  try {
    const laporanBukuBesar = await LaporanBukuBesar.find();
    res.json(laporanBukuBesar);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getLaporanBukuBesarLast = async (req, res) => {
  try {
    const laporanBukuBesar = await LaporanBukuBesar.find({
      kodeBukuBesar: req.params.id,
    })
      .sort({ createdAt: -1 })
      .limit(1);
    res.json(laporanBukuBesar);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getLaporanBukuBesarByKodeBuku = async (req, res) => {
  try {
    const laporanBukuBesar = await LaporanBukuBesar.find({
      kodeBukuBesar: req.params.id,
    });
    res.json(laporanBukuBesar);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getLaporanBukuBesarById = async (req, res) => {
  try {
    const laporanBukuBesar = await LaporanBukuBesar.findById(req.params.id);
    res.json(laporanBukuBesar);
  } catch (error) {
    // Error 404 = Not Found
    res.status(404).json({ message: error.message });
  }
};

export const saveLaporanBukuBesar = async (req, res) => {
  const laporanBukuBesar = new LaporanBukuBesar(req.body);
  try {
    const insertedLaporanBukuBesar = await laporanBukuBesar.save();
    // Status 201 = Created
    res.status(201).json(insertedLaporanBukuBesar);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const deleteLaporanBukuBesar = async (req, res) => {
  try {
    const deletedLaporanBukuBesar = await LaporanBukuBesar.deleteOne({
      _id: req.params.id,
    });
    // Status 200 = Successful
    res.status(200).json(deletedLaporanBukuBesar);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};
