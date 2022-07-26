import BukuBesar from "../models/BukuBesarModel.js";

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
    const bukuBesar = await BukuBesar.find({}, {kode: 1, nama: 1, kelompok: 1, _id: 0});
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

export const saveBukuBesar = async (req, res) => {
  const bukuBesar = new BukuBesar(req.body);
  try {
    const insertedBukuBesar = await bukuBesar.save();
    // Status 201 = Created
    res.status(201).json(insertedBukuBesar);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const updateBukuBesar = async (req, res) => {
  try {
    const updatedBukuBesar = await BukuBesar.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    // Status 200 = Successful
    res.status(200).json(updatedBukuBesar);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const deleteBukuBesar = async(req, res) => {
    try {
        const deletedBukuBesar = await BukuBesar.deleteOne({ _id: req.params.id });
        // Status 200 = Successful
        res.status(200).json(deletedBukuBesar);
    } catch (error) {
        // Error 400 = Kesalahan dari sisi user
        res.status(400).json({ message: error.message });
    }
}