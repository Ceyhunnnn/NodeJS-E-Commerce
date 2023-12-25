const basket = require("../models/basketModel");
const APIError = require("../utils/error");
const Response = require("../utils/response");
const createBasket = async (req, res) => {
  const createdBasket = new basket(req.body);
  createdBasket
    .save()
    .then((response) => {
      new Response(null, "Created basket for User").created(res);
    })
    .catch(() => new APIError("Not Created", 400));
};
const getUserBasket = async (req, res) => {
  const { id } = req.params;
  const userBasket = await basket.find({ userId: id });
  if (userBasket) {
    new Response(userBasket, "User basket data sent").success(res);
  }
};
const updateBasket = async (req, res) => {
  const { id } = req.params;
  const { updatedList } = req.body;
  const userBasket = await basket.find({ userId: id });
  const missingItemsFromAPI = updatedList.filter(
    (updatedItem) =>
      !userBasket[0].basketList.some((item) => item._id === updatedItem._id)
  );
  const lastItems = userBasket[0].basketList.concat(missingItemsFromAPI);
  const result = await basket.findByIdAndUpdate(
    { _id: userBasket[0]._id },
    { basketList: lastItems }
  );
  if (result.basketList.length) {
    new Response(null, "User basket updated").success(res);
  }
};

module.exports = { createBasket, getUserBasket, updateBasket };
