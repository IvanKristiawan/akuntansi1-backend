import Harta from "../models/HartaModel.js";
import { createError } from "../utils/error.js";

export const getHartas = async (req, res) => {
  try {
    const harta = await Harta.find({});
    res.json(harta);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getHartaById = async (req, res) => {
  try {
    const harta = await Harta.findById(req.params.id);
    res.json(harta);
  } catch (error) {
    // Error 404 = Not Found
    res.status(404).json({ message: error.message });
  }
};

export const getHartaLast = async (req, res) => {
  try {
    const harta = await Harta.find({}).sort({ createdAt: -1 }).limit(1);
    res.json(harta);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getHartaLancarAll = async (req, res) => {
  try {
    const harta = await Harta.find({}).sort({ createdAt: -1 }).limit(1);
    const hartaLancar = harta[0].hartaLancar;
    res.json(hartaLancar);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getHartaLancarAllForDoc = async (req, res) => {
  try {
    let tempHarta = [];
    const harta = await Harta.find({}).sort({ createdAt: -1 }).limit(1);
    const hartaLancar = harta[0].hartaLancar;
    hartaLancar.map((val) => {
      tempHarta.push({
        kodeAccount: val.kodeAccount,
        namaAccount: val.namaAccount,
        kelompokAccount: val.kelompokAccount,
        total: val.total.toLocaleString(),
      });
    });
    res.json(tempHarta);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getHartaLancar = async (req, res) => {
  try {
    const harta = await Harta.find({}).sort({ createdAt: -1 }).limit(1);
    const hartaLancar = harta[0].hartaLancar;
    const findHartaLancar = hartaLancar.filter((val, index) => {
      if (val.kodeAccount === req.params.id) {
        return val;
      }
    });
    res.json(findHartaLancar);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getHartaLancarOther = async (req, res) => {
  try {
    const harta = await Harta.find({}).sort({ createdAt: -1 }).limit(1);
    const hartaLancar = harta[0].hartaLancar;
    const findHartaLancar = hartaLancar.filter((val, index) => {
      if (val.kodeAccount !== req.params.id) {
        return val;
      }
    });
    res.json(findHartaLancar);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getHartaTetapAll = async (req, res) => {
  try {
    const harta = await Harta.find({}).sort({ createdAt: -1 }).limit(1);
    const hartaTetap = harta[0].hartaTetap;
    res.json(hartaTetap);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getHartaTetapAllForDoc = async (req, res) => {
  try {
    let tempHarta = [];
    const harta = await Harta.find({}).sort({ createdAt: -1 }).limit(1);
    const hartaTetap = harta[0].hartaTetap;
    hartaTetap.map((val) => {
      tempHarta.push({
        kodeAccount: val.kodeAccount,
        namaAccount: val.namaAccount,
        kelompokAccount: val.kelompokAccount,
        total: val.total.toLocaleString(),
      });
    });
    res.json(tempHarta);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getHartaTetap = async (req, res) => {
  try {
    const harta = await Harta.find({}).sort({ createdAt: -1 }).limit(1);
    const hartaTetap = harta[0].hartaTetap;
    const findHartaTetap = hartaTetap.filter((val, index) => {
      if (val.kodeAccount === req.params.id) {
        return val;
      }
    });
    res.json(findHartaTetap);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getHartaTetapOther = async (req, res) => {
  try {
    const harta = await Harta.find({}).sort({ createdAt: -1 }).limit(1);
    const hartaTetap = harta[0].hartaTetap;
    const findHartaTetap = hartaTetap.filter((val, index) => {
      if (val.kodeAccount !== req.params.id) {
        return val;
      }
    });
    res.json(findHartaTetap);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const saveHarta = async (req, res, next) => {
  const harta = new Harta(req.body);
  try {
    if (req.user.isAdmin) {
      const insertedHarta = await harta.save();
      // Status 201 = Created
      res.status(201).json(insertedHarta);
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const updateHarta = async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      const updatedHarta = await Harta.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      // Status 200 = Successful
      res.status(200).json(updatedHarta);
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const deleteHarta = async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      const deletedHarta = await Harta.deleteOne({
        _id: req.params.id,
      });
      // Status 200 = Successful
      res.status(200).json(deletedHarta);
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};
