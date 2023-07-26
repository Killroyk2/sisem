const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({
MessageID: {
  type: String,
  required: true,
  },
  RelatesTo: {
  type: String,
  required: true,
  },
status: {
  type: String,
  required: true,
  }
});

module.exports = mongoose.model("Report", ReportSchema);
