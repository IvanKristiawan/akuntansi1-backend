import PerubahanModal from "../models/PerubahanModalModel.js";

export const getPerubahanModals = async (req, res) => {
  try {
    const perubahanModal = await PerubahanModal.find({});
    res.json(perubahanModal);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getPerubahanModalForDoc = async (req, res) => {
  try {
    let tempPerubahanModal = []
    const perubahanModal = await PerubahanModal.find(
      {},
      {
        modalSaham: 1,
        labaBersih: 1,
        total: 1,
        _id: 0,
      }
    );
    perubahanModal.map(val => {
      tempPerubahanModal.push({
        modalSaham: val.modalSaham.toLocaleString(),
        labaBersih: val.labaBersih.toLocaleString(),
        total: val.total.toLocaleString(),
      })
    })
    res.json(tempPerubahanModal);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getPerubahanModalLast = async (req, res) => {
  try {
    const perubahanModal = await PerubahanModal.find({})
      .sort({ createdAt: -1 })
      .limit(1);
    res.json(perubahanModal);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const savePerubahanModal = async (req, res) => {
  const perubahanModal = new PerubahanModal(req.body);
  try {
    const insertedPerubahanModal = await perubahanModal.save();
    // Status 201 = Created
    res.status(201).json(insertedPerubahanModal);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const updatePerubahanModal = async (req, res) => {
  try {
    const updatedPerubahanModal = await PerubahanModal.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    // Status 200 = Successful
    res.status(200).json(updatedPerubahanModal);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const deletePerubahanModal = async (req, res) => {
  try {
    const deletedPerubahanModal = await PerubahanModal.deleteOne({
      _id: req.params.id,
    });
    // Status 200 = Successful
    res.status(200).json(deletedPerubahanModal);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};
