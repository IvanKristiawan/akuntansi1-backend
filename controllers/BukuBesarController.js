import BukuBesar from "../models/BukuBesarModel.js";
import { createError } from "../utils/error.js";

export const getBukuBesars = async (req, res) => {
  try {
    const bukuBesar = await BukuBesar.find();
    res.json(bukuBesar);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getBukuBesarKodeNamaKelompok = async (req, res) => {
  try {
    const bukuBesar = await BukuBesar.find(
      {},
      { kode: 1, nama: 1, kelompok: 1, jenisSaldo: 1, _id: 0 }
    );
    res.json(bukuBesar);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getBukuBesarById = async (req, res) => {
  try {
    const bukuBesar = await BukuBesar.findById(req.params.id);
    res.json(bukuBesar);
  } catch (error) {
    // Error 404 = Not Found
    res.status(404).json({ message: error.message });
  }
};

export const saveBukuBesar = async (req, res, next) => {
  const bukuBesar = new BukuBesar(req.body);
  try {
    if (req.user.isAdmin) {
      const insertedBukuBesar = await bukuBesar.save();
      // Status 201 = Created
      res.status(201).json(insertedBukuBesar);
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const updateBukuBesar = async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      const updatedBukuBesar = await BukuBesar.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      // Status 200 = Successful
      res.status(200).json(updatedBukuBesar);
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const deleteBukuBesar = async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      const deletedBukuBesar = await BukuBesar.deleteOne({
        _id: req.params.id,
      });
      // Status 200 = Successful
      res.status(200).json(deletedBukuBesar);
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};
