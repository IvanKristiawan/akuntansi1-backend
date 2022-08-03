import JurnalUmum from "../models/JurnalUmumModel.js";

export const getJurnalUmums = async (req, res) => {
  try {
    const jurnalUmum = await JurnalUmum.find();
    res.json(jurnalUmum);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getJurnalUmumById = async (req, res) => {
  try {
    const jurnalUmum = await JurnalUmum.findById(req.params.id);
    res.json(jurnalUmum);
  } catch (error) {
    // Error 404 = Not Found
    res.status(404).json({ message: error.message });
  }
};

export const saveJurnalUmum = async (req, res) => {
  const jurnalUmum = new JurnalUmum(req.body);
  try {
    const insertedJurnalUmum = await jurnalUmum.save();
    // Status 201 = Created
    res.status(201).json(insertedJurnalUmum);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const updateJurnalUmum = async (req, res) => {
  try {
    const updatedJurnalUmum = await JurnalUmum.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    // Status 200 = Successful
    res.status(200).json(updatedJurnalUmum);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const deleteJurnalUmum = async (req, res) => {
  try {
    const deletedJurnalUmum = await JurnalUmum.deleteOne({
      _id: req.params.id,
    });
    // Status 200 = Successful
    res.status(200).json(deletedJurnalUmum);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};
