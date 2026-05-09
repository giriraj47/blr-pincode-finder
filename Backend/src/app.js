const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5174",
  })
);
app.use(express.json());

const pinRoutes = require("./routes/pin.routes");

app.use("/api/pincode", pinRoutes);

module.exports = app;
