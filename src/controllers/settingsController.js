const settings = require("./../models/settingsModel");
const Response = require("../utils/response");
const APIError = require("../utils/error");
const createSettings = async (req, res) => {
  const isSettingData = await settings.find();
  if (isSettingData.length > 0) {
    await settings.deleteMany();
  }
  const settingData = new settings(req.body);
  await settingData
    .save()
    .then(() => new Response(null, "Created setting data").created(res))
    .catch(() => new APIError("Not Created", 400));
};

const getAllSettings = async (req, res) => {
  const setting = await settings.find().select("about contact");
  new Response(setting[0], "Settings Data").success(res);
};

module.exports = { createSettings, getAllSettings };
