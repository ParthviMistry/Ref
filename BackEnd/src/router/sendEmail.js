// const express = require('express');
// const mongoose = require('mongoose');
// // const userModel = require('../models/userMdl');
// const otpModel = require('../models/otpMdl');
// // const auth = require('../middelware/auth');
// // const userModel = require('../models/userMdl');
// // const otpModel = require('../models/otpMdl');

// const routeSendEmail = new express.Router();
// // const routerUser = new express.Router();

// routeSendEmail.post('/users/sendemail', async (req, res) => {
//   try {
//     const data = await userModel.findOne({ email: req.body.email });
//     console.log(data);
//     if (data) {
//       let otpCode = Math.floor(Math.random() * 10000 + 1);
//       let otpData = new otpModel({
//         email: req.body.email,
//         code: otpCode,
//         expireIn: new Date().getTime() + 300 * 1000,
//       });

//       await otpData.save();
//     }
//     res.status(200).send('Check Your Email.We send OTP');
//   } catch (e) {
//     res.status(404).send();
//   }
//   res.status(200).send('Check Your Email.We send OTP');
// });

// const mailer = (email, otp) => {
//   var nodemailer = require('nodemailer');
//   var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     port: 535,
//     secure: false,
//     auth: {
//       user: 'parthvimistry9366@gmail.com',
//       pass: 'Mi$try1526',
//     },
//   });

//   var mailOption = {
//     from: 'parthvimistry9366@gmail.com',
//     to: 'parthvimistry48@gmail.com',
//     subject: 'hieee',
//     text: 'thankss',
//   };

//   transporter.sendMail(mailOption, (error, info) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email Sent :' + info.response);
//     }
//   });
// };

// module.exports = { routeSendEmail, mailer };
