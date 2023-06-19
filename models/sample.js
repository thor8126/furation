const mongoose = require("mongoose");

const sampleSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports.SampleSchema = mongoose.model("Sample", sampleSchema);
