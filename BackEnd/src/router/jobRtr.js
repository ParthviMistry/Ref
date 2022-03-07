const express = require("express");
const mongoose = require("mongoose");

// const auth = require('../middelware/auth');
const jobModel = require("../models/jobMdl");

const upload = require("../middelware/upload");

const routerJob = new express.Router();

// -- Create Job-- //

routerJob.post("/recruiter/job",
  // upload.single("Image"),
  async (req, res) => {
  try {
    // req.body.Image = req.file.path;
    job = new jobModel(req.body);
    await job.save();

    res.status(200).json({ message: "Job Added Successfully!" });
  } catch (e) {
    res.status(400).send(e);
  }
});

// -- Read Job -- //

routerJob.get("/recruiter/job", async (req, res) => {
  try {
    const getJob = await jobModel.find();

    res.status(201).send({ getJob });
  } catch (e) {
    res.status(400).send("Error" + e);
  }
});

// -- Read Job By Id-- //

routerJob.get("/recruiter/job/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    // console.log(_id);
    const getJobByid = await jobModel.findById({_id});
    // console.log(getJobByid);
    if (!getJobByid) {
      return res.status(404).send("Job Not Found");
    } else {
      res.status(201).send(getJobByid);
    }
  } catch (e) {
    res.status(400).send("Error" + e);
  }
});

// -- Read Job By title-- //

routerJob.get("/recruiter/job/:title", async (req, res) => {
  try {
    const jobtitle = req.params.title;
    // console.log(jobtitle);
    const getJobrBytitle = await jobModel.find({ title: jobtitle });
    // console.log(getJobrBytitle);
    if (!getJobrBytitle) {
      return res.status(404).send("Job Not Found");
    } else {
      res.status(201).send(getJobrBytitle);
    }
  } catch (e) {
    res.status(400).send("Error" + e);
  }
});

// -- Update Jobs-- //

routerJob.patch("/recruiter/job/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    console.log(_id);
    const updateJob = await jobModel.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    console.log(updateJob);
    if (!updateJob) {
      return res.status(404).send("User Not Found");
    } else {
      res.status(201).send(updateJob);
    }
  } catch (e) {
    res.status(400).send("Error" + e);
  }
});

// -- Delete User Registration-- //

routerJob.delete("/recruiter/job/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    // console.log(_id);
    const deleteJob = await jobModel.findByIdAndDelete(_id);
    // console.log(deleteJob);
    if (!deleteJob) {
      return res.status(404).send("Job Not Found");
    } else {
      res.status(201).send("Successfully Deleted  " + deleteJob);
    }
  } catch (e) {
    res.status(400).send("Error   " + e);
  }
});

module.exports = routerJob;
