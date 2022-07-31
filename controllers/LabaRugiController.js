import LabaRugi from "../models/LabaRugiModel.js";

export const getLabaRugis = async (req, res) => {
  try {
    const labaRugi = await LabaRugi.find({});
    res.json(labaRugi);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getLabaRugiLast = async (req, res) => {
  try {
    const labaRugi = await LabaRugi.find({}).sort({ createdAt: -1 }).limit(1);
    res.json(labaRugi);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getLabaRugiTotal = async (req, res) => {
  try {
    const labaRugi = await LabaRugi.find(
      {},
      {
        totalPendapatan: 1,
        totalHPP: 1,
        totalBebanOperasional: 1,
        labaKotor: 1,
        labaBersih: 1,
        _id: 0,
      }
    )
      .sort({ createdAt: -1 })
      .limit(1);
    res.json(labaRugi);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getLabaRugiTransaksiAll = async (req, res) => {
  try {
    const labaRugi = await LabaRugi.find({}).sort({ createdAt: -1 }).limit(1);
    const transaksi = labaRugi[0].transaksi;
    res.json(transaksi);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getLabaRugiTransaksiAllForDoc = async (req, res) => {
  try {
    const labaRugi = await LabaRugi.find({}).sort({ createdAt: -1 }).limit(1);
    const transaksi = labaRugi[0].transaksi;
    let tempTransaksi = [];
    transaksi.map((val) => {
      tempTransaksi.push({
        kodeAccount: val.kodeAccount,
        namaAccount: val.namaAccount,
        total: val.total,
      });
    });
    res.json(tempTransaksi);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getLabaRugiTransaksi = async (req, res) => {
  try {
    const labaRugi = await LabaRugi.find({}).sort({ createdAt: -1 }).limit(1);
    const transaksi = labaRugi[0].transaksi;
    const findTransaksi = transaksi.filter((val, index) => {
      if (val.kodeAccount === req.params.id) {
        return val;
      }
    });
    res.json(findTransaksi);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getLabaRugiTransaksiOther = async (req, res) => {
  try {
    const labaRugi = await LabaRugi.find({}).sort({ createdAt: -1 }).limit(1);
    const transaksi = labaRugi[0].transaksi;
    const findTransaksi = transaksi.filter((val, index) => {
      if (val.kodeAccount !== req.params.id) {
        return val;
      }
    });
    res.json(findTransaksi);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getLabaRugiById = async (req, res) => {
  try {
    const labaRugi = await LabaRugi.findById(req.params.id);
    res.json(labaRugi);
  } catch (error) {
    // Error 404 = Not Found
    res.status(404).json({ message: error.message });
  }
};

export const saveLabaRugi = async (req, res) => {
  const labaRugi = new LabaRugi(req.body);
  try {
    const insertedLabaRugi = await labaRugi.save();
    // Status 201 = Created
    res.status(201).json(insertedLabaRugi);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const updateLabaRugi = async (req, res) => {
  try {
    const updatedLabaRugi = await LabaRugi.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    // Status 200 = Successful
    res.status(200).json(updatedLabaRugi);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const deleteLabaRugi = async (req, res) => {
  try {
    const deletedLabaRugi = await LabaRugi.deleteOne({
      _id: req.params.id,
    });
    // Status 200 = Successful
    res.status(200).json(deletedLabaRugi);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};
