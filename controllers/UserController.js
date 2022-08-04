import User from "../models/UserModel.js";
import bcrypt from "bcryptjs";

export const updateUser = async (req, res, next) => {
  try {
    const findUser = await User.findById(req.params.id)
    const salt = bcrypt.genSaltSync(10);
    let hash
    if(req.body.password) {
      hash = bcrypt.hashSync(req.body.password, salt);
    } else {
      hash = findUser.password
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        username: req.body.username,
        email: req.body.email,
        isAdmin: req.body.isAdmin,
        password: hash,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};
