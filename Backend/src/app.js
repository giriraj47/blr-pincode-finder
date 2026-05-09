const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5174", "https://blr-pincode-finder.onrender.com"],
  })
);
app.use(express.json());

const pinRoutes = require("./routes/pin.routes");

app.use("/api/pincode", pinRoutes);

app.get("/", (req, res) => {
  res.send("BLR Pincode Finder API is running...");
});

module.exports = app;
