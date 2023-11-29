const user = require("../models/userModel");
const APIError = require("../utils/error");
const Response = require("../utils/response");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const { email } = req.body;
  const checkUser = await user.findOne({ email });
  if (checkUser) {
    throw new APIError("E-mail already in use", 401);
  }
  req.body.password = await bcrypt.hash(req.body.password, 10);
  const newUser = new user(req.body);
  await newUser
    .save()
    .then((data) => new Response(data, "Account Created !").created(res))
    .catch(() => new APIError("Account could not be created", 400));
};

const login = (req, res) => {};

module.exports = { register, login };
