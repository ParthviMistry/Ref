const express = require('express');
const mongoose = require('mongoose');

const userModel = require('../models/userMdl');
const otpModel = require('../models/otpMdl');

const routerChangePassword = new express.Router();

routerChangePassword.post('/users/changePassword', async (req, res) => {
  try {
    const data = await userModel.find({
      email: req.body.email,
      code: req.body.code,
    });
    console.log(data);

    if (data) {
      let currentTime = new Date().getTime();
      let diff = data.expireIn - currentTime;

      if (diff < 0) {
        res.status(404).json('Token Expire');
      } else {
        const user = await userModel.findOne({
          email: req.body.email,
        });
        user.password = user.body.password;
        user.save();
        res.status(200).json('Password change ');
      }
    } else {
      res.status(404).json('Invalid OTP');
    }
  } catch (e) {
    res.status(404).send(e);
  }
});

module.exports = routerChangePassword;
