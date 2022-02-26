const mongoose = require('mongoose');

const JobModel = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    skill: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    jobType: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    salary: {
      type: Number,
      required: true,
      trim: true,
    },
    position: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const jobModel = mongoose.model('Jobs', JobModel);

module.exports = jobModel;
