// Needed Resources 
const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController")
const utilities = require("../utilities/")
// Route to build inventory by classification view
router.get("/type/:classificationId", invController.buildByClassificationId);
// Route to build inventory by single vehicle view
router.get('/detail/:invId', utilities.handleErrors(invController.buildByInventoryId));

// Route to handle specific inventory item details
router.get("/detail/:invId", utilities.handleErrors(invController.buildByInventoryId));

module.exports = router;