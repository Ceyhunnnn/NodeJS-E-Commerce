const user = require("../models/userModel");
const APIError = require("../utils/error");
const Response = require("../utils/response");
const bcrypt = require("bcrypt");
const { createToken } = require("../middlewares/auth");
var fs = require("fs");
const register = async (req, res) => {
  const { email } = req.body;

  const checkUser = await user.findOne({ email });
  if (checkUser) {
    throw new APIError("E-mail already in use", 400);
  }
  req.body.password = await bcrypt.hash(req.body.password, 10);
  const newUser = new user(req.body);

  await newUser
    .save()
    .then((data) => new Response(null, "Account Created!").created(res))
    .catch(() => new APIError("Account could not be created", 400));
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const loginUser = await user.findOne({ email });
  if (!loginUser.isActive) {
    throw new APIError("No such user found", 400);
  }
  if (!loginUser) {
    throw new APIError("Email or password wrong, please Please try again", 401);
  }
  const comparePassword = await bcrypt.compare(password, loginUser.password);
  if (!comparePassword) {
    throw new APIError("Email or password wrong, please Please try again", 401);
  }
  createToken(loginUser, res);
};

const me = async (req, res) => {
  return new Response(req.user, "Success").success(res);
};

const editProfile = async (req, res) => {
  const { id } = req.params;
  const updatedUser = await user.findByIdAndUpdate(id, req.body, { new: true });
  if (!updatedUser) {
    throw new APIError("User is not found", 400);
  }
  return new Response("", "Profile Updated!").success(res);
};

const addProfilePhoto = async (req, res) => {
  const { id } = req.params;
  const updatedUser = await user.findByIdAndUpdate(
    id,
    {
      image: `${req.protocol}://${req.get("host")}/profile/${
        req.file.filename
      }`,
    },
    { new: true }
  );
  if (!updatedUser) {
    throw new APIError("User is not found", 400);
  }

  new Response(null, "Profil Photo updated").success(res);
};

const deleteProfilPhoto = async (req, res) => {
  const { image } = req.body;
  const { id } = req.params;
  const updatedUser = await user.findByIdAndUpdate(
    id,
    { image: "" },
    { new: true }
  );
  if (!updatedUser) {
    throw new APIError("User is not found", 400);
  }
  fs.unlink("upload/images/" + image, (err) => {
    if (err) {
      console.log("Profile Photo cannot be deleted, please try again");
    }
  });
  return new Response("", "Profile Photo deleted").success(res);
};

const deactiveAccount = async (req, res) => {
  const { id } = req.body;
  const query = { isActive: false };
  const blocUser = await user.findByIdAndUpdate(id, query);
  if (blocUser) new Response(null, true).success(res);
};
module.exports = {
  register,
  login,
  me,
  editProfile,
  addProfilePhoto,
  deleteProfilPhoto,
  deactiveAccount,
};
