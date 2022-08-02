import Neraca from "../models/NeracaModel.js";
import { createError } from "../utils/error.js";

export const getNeracas = async (req, res) => {
  try {
    const neraca = await Neraca.find({});
    res.json(neraca);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getNeracaLast = async (req, res) => {
  try {
    const neraca = await Neraca.find({}).sort({ createdAt: -1 }).limit(1);
    res.json(neraca);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const saveNeraca = async (req, res, next) => {
  const neraca = new Neraca(req.body);
  try {
    if (req.user.isAdmin) {
      const insertedNeraca = await neraca.save();
      // Status 201 = Created
      res.status(201).json(insertedNeraca);
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const updateNeraca = async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      const updatedNeraca = await Neraca.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      // Status 200 = Successful
      res.status(200).json(updatedNeraca);
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const deleteNeraca = async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      const deletedNeraca = await Neraca.deleteOne({
        _id: req.params.id,
      });
      // Status 200 = Successful
      res.status(200).json(deletedNeraca);
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};
