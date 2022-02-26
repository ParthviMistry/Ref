const mongoose = require('mongoose');

const OTPSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,

      lowercase: true,
    },
    code: {
      type: String,
      required: true,
    },
    expireIn: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const otpSchema = mongoose.model('opt', OTPSchema);

module.exports = otpSchema;
