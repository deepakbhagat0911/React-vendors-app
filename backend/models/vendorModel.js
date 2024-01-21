const mongoose = require("mongoose");
const validator = require("validator");

const VendorSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  bankAccountNumber: {
    type: Number,
  },
  bankName: {
    type: String,
  },
  addressLine1: {
    type: String,
  },
  addressLine2: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  zipcode: Number,
});

const Vendor = mongoose.model("Vendor", VendorSchema);

module.exports = Vendor;
