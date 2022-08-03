import Neraca from "../models/NeracaModel.js";

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

export const saveNeraca = async (req, res) => {
  const neraca = new Neraca(req.body);
  try {
    const insertedNeraca = await neraca.save();
    // Status 201 = Created
    res.status(201).json(insertedNeraca);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const updateNeraca = async (req, res) => {
  try {
    const updatedNeraca = await Neraca.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    // Status 200 = Successful
    res.status(200).json(updatedNeraca);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const deleteNeraca = async (req, res) => {
  try {
    const deletedNeraca = await Neraca.deleteOne({
      _id: req.params.id,
    });
    // Status 200 = Successful
    res.status(200).json(deletedNeraca);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};
