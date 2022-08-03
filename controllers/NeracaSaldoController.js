import NeracaSaldo from "../models/NeracaSaldoModel.js";

export const getNeracaSaldos = async (req, res) => {
  try {
    const neracaSaldo = await NeracaSaldo.find({});
    res.json(neracaSaldo);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getNeracaSaldoForDoc = async (req, res) => {
  try {
    let tempNeracaSaldo = [];
    const neracaSaldo = await NeracaSaldo.find(
      {},
      {
        kodeAccount: 1,
        namaAccount: 1,
        debet: 1,
        kredit: 1,
        _id: 0,
      }
    );
    neracaSaldo.map((val) => {
      tempNeracaSaldo.push({
        kodeAccount: val.kodeAccount,
        namaAccount: val.namaAccount,
        debet: val.debet.toLocaleString(),
        kredit: val.kredit.toLocaleString(),
      });
    });
    res.json(tempNeracaSaldo);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getNeracaSaldoLast = async (req, res) => {
  try {
    const neracaSaldo = await NeracaSaldo.find({ kodeAccount: req.params.id })
      .sort({ createdAt: -1 })
      .limit(1);
    res.json(neracaSaldo);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getNeracaSaldoById = async (req, res) => {
  try {
    const neracaSaldo = await NeracaSaldo.findById(req.params.id);
    res.json(neracaSaldo);
  } catch (error) {
    // Error 404 = Not Found
    res.status(404).json({ message: error.message });
  }
};

export const saveNeracaSaldo = async (req, res) => {
  const neracaSaldo = new NeracaSaldo(req.body);
  try {
    const insertedNeracaSaldo = await neracaSaldo.save();
    // Status 201 = Created
    res.status(201).json(insertedNeracaSaldo);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const updateNeracaSaldo = async (req, res) => {
  try {
    const updatedNeracaSaldo = await NeracaSaldo.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    // Status 200 = Successful
    res.status(200).json(updatedNeracaSaldo);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const deleteNeracaSaldo = async (req, res) => {
  try {
    const deletedNeracaSaldo = await NeracaSaldo.deleteOne({
      _id: req.params.id,
    });
    // Status 200 = Successful
    res.status(200).json(deletedNeracaSaldo);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};
