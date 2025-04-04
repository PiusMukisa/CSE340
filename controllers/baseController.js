const utilities = require("../utilities/")
const baseController = {}

baseController.buildHome = async function (req, res, next) {
  try {
    const nav = await utilities.getNav();
    res.render("index", { title: "Home", nav, message: null });
  } catch (err) {
    next(err);
  }
};

module.exports = baseController