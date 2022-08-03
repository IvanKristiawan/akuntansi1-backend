import Kewajiban from "../models/KewajibanModel.js";

export const getKewajibans = async (req, res) => {
  try {
    const kewajiban = await Kewajiban.find({});
    res.json(kewajiban);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getKewajibanLast = async (req, res) => {
  try {
    const kewajiban = await Kewajiban.find({}).sort({ createdAt: -1 }).limit(1);
    res.json(kewajiban);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getKewajibanAll = async (req, res) => {
  try {
    const kewajiban = await Kewajiban.find({}).sort({ createdAt: -1 }).limit(1);
    const kewajibanAll = kewajiban[0].kewajiban;
    res.json(kewajibanAll);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getKewajibanAllForDoc = async (req, res) => {
  try {
    let tempKewajiban = [];
    const kewajiban = await Kewajiban.find({}).sort({ createdAt: -1 }).limit(1);
    const kewajibanAll = kewajiban[0].kewajiban;
    kewajibanAll.map((val) => {
      tempKewajiban.push({
        kodeAccount: val.kodeAccount,
        namaAccount: val.namaAccount,
        kelompokAccount: val.kelompokAccount,
        total: val.total.toLocaleString(),
      });
    });
    res.json(tempKewajiban);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getKewajiban = async (req, res) => {
  try {
    const kewajiban = await Kewajiban.find({}).sort({ createdAt: -1 }).limit(1);
    const listKewajiban = kewajiban[0].kewajiban;
    const findKewajiban = listKewajiban.filter((val, index) => {
      if (val.kodeAccount === req.params.id) {
        return val;
      }
    });
    res.json(findKewajiban);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getKewajibanOther = async (req, res) => {
  try {
    const kewajiban = await Kewajiban.find({}).sort({ createdAt: -1 }).limit(1);
    const listKewajiban = kewajiban[0].kewajiban;
    const findKewajiban = listKewajiban.filter((val, index) => {
      if (val.kodeAccount !== req.params.id) {
        return val;
      }
    });
    res.json(findKewajiban);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const saveKewajiban = async (req, res) => {
  const kewajiban = new Kewajiban(req.body);
  try {
    const insertedKewajiban = await kewajiban.save();
    // Status 201 = Created
    res.status(201).json(insertedKewajiban);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const updateKewajiban = async (req, res) => {
  try {
    const updatedKewajiban = await Kewajiban.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    // Status 200 = Successful
    res.status(200).json(updatedKewajiban);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const deleteKewajiban = async (req, res) => {
  try {
    const deletedKewajiban = await Kewajiban.deleteOne({
      _id: req.params.id,
    });
    // Status 200 = Successful
    res.status(200).json(deletedKewajiban);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};
