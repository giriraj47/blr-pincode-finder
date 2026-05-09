const pincodeModel = require("../models/pincode.model");

async function getAreaByPincode(req, res) {
  const pincode = req.params.pincode;
  console.log(pincode);

  const pincodeData = await pincodeModel.findOne({ Pincode: pincode });
  console.log(pincodeData);

  const area = pincodeData.Area;

  if (!area) {
    return res.status(400).json({
      message: "invalid pincode",
    });
  }

  res.status(200).json({
    message: `Area fetched successfully for pin ${pincode}`,
    area,
  });
}

async function getPincodeByArea(req, res) {
  const area = req.params.area;

  const pincodeData = await pincodeModel.findOne({ Area: area });

  const pincode = pincodeData.Pincode;

  if (!pincode) {
    return res.status(400).json({
      message: "invalid Area",
    });
  }

  res.status(200).json({
    message: `Pincode fetched successfully for ${area}`,
    pincode,
  });
}

module.exports = {
  getAreaByPincode,
  getPincodeByArea,
};
