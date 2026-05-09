const express = require("express");
const {
  getAreaByPincode,
  getPincodeByArea,
} = require("../controllers/pin.controller");

const router = express.Router();

router.get("/pincode/:pincode", getAreaByPincode);
router.get("/area/:area", getPincodeByArea);

module.exports = router;
