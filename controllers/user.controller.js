const User = require("../models/user.model.js");

const addUser = async (req, res) => {
  const { name, npm, jurusan } = req.body;
  const user = new User({ name, npm, jurusan });
  try {
    await user.save();
    res
      .status(201)
      .json({ message: "Data Mahasiswa berhasil ditambahkan", data: user });
  } catch (err) {
    res.status(400).send(err);
  }
};

const getAllUser = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ message: "Data Mahasiswa berhasil ditemukan", data: users });
    } catch (err) {
        res.status(400).send(err);    
    }
}

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        res.status(200).json({ message: "Data Mahasiswa berhasil ditemukan", data: user });
    } catch (err) {
        res.status(400).send(err);
    }
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, npm, jurusan } = req.body;
    try {
        await User.findByIdAndUpdate(id, { name, npm, jurusan });
        res.status(200).json({ message: "Data Mahasiswa berhasil diupdate" });
    }
    catch (err) {
        res.status(400).send(err);
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await User.findByIdAndDelete(id);
        res.status(200).json({ message: "Data Mahasiswa berhasil dihapus" });
    } catch (err) {
        res.status(400).send(err);
    }
}

module.exports = { addUser, getAllUser, getUserById, updateUser, deleteUser };