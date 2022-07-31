import Harta from "../models/HartaModel.js";

export const getHartas = async (req, res) => {
  try {
    const harta = await Harta.find({});
    res.json(harta);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
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

export const saveHarta = async (req, res) => {
  const harta = new Harta(req.body);
  try {
    const insertedHarta = await harta.save();
    // Status 201 = Created
    res.status(201).json(insertedHarta);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const updateHarta = async (req, res) => {
  try {
    const updatedHarta = await Harta.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    // Status 200 = Successful
    res.status(200).json(updatedHarta);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const deleteHarta = async (req, res) => {
  try {
    const deletedHarta = await Harta.deleteOne({
      _id: req.params.id,
    });
    // Status 200 = Successful
    res.status(200).json(deletedHarta);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};
