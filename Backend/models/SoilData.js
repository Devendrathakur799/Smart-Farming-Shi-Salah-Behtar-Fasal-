const mongoose = require("mongoose");

const soilSchema = new mongoose.Schema({
  N: Number,
  P: Number,
  K: Number,
  ph: Number,
  moisture: Number,
  userId: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Soil", soilSchema);
