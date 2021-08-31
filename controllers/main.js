require("dotenv").config();
const { BadRequestError } = require("../errors");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  //res.send("Fake login/signup");
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequestError("must provide username and/or password");
  }
  // demo purposes
  const id = new Date().getDate();
  //assign Token
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(200).json({ msg: "user created", token });
};

const dashboard = (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `hello ${req.user.username} `,
    secret: `your lucky number is : ${luckyNumber}`,
  });
};
const dashboard2 = (req, res) => {
  return res.json("welcome");
};
module.exports = { login, dashboard, dashboard2 };
