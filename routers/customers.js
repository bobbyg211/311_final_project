const express = require("express");
const customersController = require("../controllers/customers");
const router = express.Router();

router.get("/customers", customersController.getAllCustomers);

router.post("/customers", customersController.createCustomer);

module.exports = router;
