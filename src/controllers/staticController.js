const static = require("./../models/staticModel");
const Response = require("../utils/response");
const APIError = require("../utils/error");
const createStatic = async (req, res) => {
  const isSettingData = await static.find();
  if (isSettingData.length > 0) {
    await static.deleteMany();
  }
  const settingData = new static(req.body);
  await settingData
    .save()
    .then(() => new Response(null, "Created setting data").created(res))
    .catch(() => new APIError("Not Created", 400));
};

const getAllStatic = async (req, res) => {
  const setting = await static.find().select("about contact");
  new Response(setting[0], "static Data").success(res);
};

module.exports = { createStatic, getAllStatic };
