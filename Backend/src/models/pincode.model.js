const mongoose = require("mongoose");

const pincodeSchema = new mongoose.Schema({
  Area: { type: String, required: true },
  Pincode: { type: String, required: true },
});

const pincodeModel = mongoose.model("Pincode", pincodeSchema);

module.exports = pincodeModel;
