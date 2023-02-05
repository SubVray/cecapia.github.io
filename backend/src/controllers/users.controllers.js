const jwt = require("jsonwebtoken");
const JWT_SECRET =
  "fsdfdsgfhfghadafghfgssfd()sdgfhasdsafghdsfghghha?[]}gdfggdf";
const bcrypt = require("bcrypt");
const userControl = {};

const User = require("../models/Users.model");

// obtiene todas las notas
userControl.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

userControl.getUser = async (req, res) => {
  const user = await User.findOne({ _id: req.params.id });
  res.json(user);
};

userControl.userRegister = async (req, res) => {
  const { username, password, gender, rol } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 8);
  try {
    const oldUser = await User.findOne({ username });
    if (oldUser) {
      return res.send({ error: "User Exist" });
    }
    await User.create({
      username,
      gender,
      rol,
      password: encryptedPassword,
    });
    res.send({ status: "Ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
};

userControl.userLogin = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user) {
    return res.json({ message: "User Not Found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ username: user.id }, JWT_SECRET);
    if (res.status(201)) {
      return res.json({
        status: "ok",
        data: token,
      });
    } else {
      return res.json({
        error: "Error",
      });
    }
  }
  res.json({ status: "Error", error: "Invalid password" });
};

userControl.getUserData = async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET);
    const userUsername = user.username;
    User.findOne({ _id: userUsername })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) {}
};

userControl.updateUser = async (req, res) => {
  const { username, gender, rol } = req.body;
  await User.findOneAndUpdate(
    { _id: req.params.id },
    {
      username,
      gender,
      rol,
    }
  );
  res.json({ message: "Note Updated" });
};

userControl.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
};

module.exports = userControl;
