import AJurnalUmum from "../models/AJurnalUmumModel.js";

export const getAJurnalUmums = async (req, res) => {
  try {
    const aJurnalUmum = await AJurnalUmum.find({ noJurnalUmum: req.params.id });
    res.json(aJurnalUmum);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getAJurnalUmumForDoc = async (req, res) => {
  try {
    const aJurnalUmum = await AJurnalUmum.find(
      {},
      {
        noJurnalUmum: 1,
        tanggal: 1,
        kodeAccount: 1,
        namaAccount: 1,
        keterangan: 1,
        debet: 1,
        kredit: 1,
        _id: 0,
      }
    );
    res.json(aJurnalUmum);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getAJurnalUmumByNoNota = async (req, res) => {
  try {
    let tempAJurnalUmum = [];
    const aJurnalUmum = await AJurnalUmum.find(
      { noJurnalUmum: req.params.id },
      {
        kodeAccount: 1,
        namaAccount: 1,
        keterangan: 1,
        debet: 1,
        kredit: 1,
        _id: 0,
      }
    );
    aJurnalUmum.map((val) => {
      tempAJurnalUmum.push({
        kodeAccount: val.kodeAccount,
        namaAccount: val.namaAccount,
        keterangan: val.keterangan,
        debet: val.debet.toLocaleString(),
        kredit: val.kredit.toLocaleString(),
      });
    });
    res.json(tempAJurnalUmum);
  } catch (error) {
    // Error 404 = Not Found
    res.status(404).json({ message: error.message });
  }
};

export const getAJurnalUmumById = async (req, res) => {
  try {
    const aJurnalUmum = await AJurnalUmum.findById(req.params.id);
    res.json(aJurnalUmum);
  } catch (error) {
    // Error 404 = Not Found
    res.status(404).json({ message: error.message });
  }
};

export const saveAJurnalUmum = async (req, res) => {
  const aJurnalUmum = new AJurnalUmum(req.body);
  try {
    const insertedAJurnalUmum = await aJurnalUmum.save();
    // Status 201 = Created
    res.status(201).json(insertedAJurnalUmum);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const updateAJurnalUmum = async (req, res) => {
  try {
    const updatedAJurnalUmum = await AJurnalUmum.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    // Status 200 = Successful
    res.status(200).json(updatedAJurnalUmum);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const deleteAJurnalUmum = async (req, res) => {
  try {
    const deletedAJurnalUmum = await AJurnalUmum.deleteOne({
      _id: req.params.id,
    });
    // Status 200 = Successful
    res.status(200).json(deletedAJurnalUmum);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};
