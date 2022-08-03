import KelompokBukuBesar from "../models/KelompokBukuBesarModel.js";

export const getKelompokBukuBesars = async (req, res) => {
  try {
    const kelompokBukuBesar = await KelompokBukuBesar.find();
    res.json(kelompokBukuBesar);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getKelompokBukuBesarKodeNama = async (req, res) => {
  try {
    const kelompokBukuBesar = await KelompokBukuBesar.find(
      {},
      { kode: 1, nama: 1, _id: 0 }
    );
    res.json(kelompokBukuBesar);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getKelompokBukuBesarById = async (req, res) => {
  try {
    const kelompokBukuBesar = await KelompokBukuBesar.findById(req.params.id);
    res.json(kelompokBukuBesar);
  } catch (error) {
    // Error 404 = Not Found
    res.status(404).json({ message: error.message });
  }
};

export const saveKelompokBukuBesar = async (req, res) => {
  const kelompokBukuBesar = new KelompokBukuBesar(req.body);
  try {
    const insertedKelompokBukuBesar = await kelompokBukuBesar.save();
    // Status 201 = Created
    res.status(201).json(insertedKelompokBukuBesar);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const updateKelompokBukuBesar = async (req, res) => {
  try {
    const updatedKelompokBukuBesar =
    await KelompokBukuBesar.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
  // Status 200 = Successful
  res.status(200).json(updatedKelompokBukuBesar);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const deleteKelompokBukuBesar = async (req, res) => {
  try {
    const deletedKelompokBukuBesar = await KelompokBukuBesar.deleteOne({
      _id: req.params.id,
    });
    // Status 200 = Successful
    res.status(200).json(deletedKelompokBukuBesar);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};
