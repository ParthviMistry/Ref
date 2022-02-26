const express = require('express');
const mongoose = require('mongoose');

const auth = require('../middelware/auth');
const userModel = require('../models/userMdl');

const routerUser = new express.Router();

// -- Create User Registration -- //

routerUser.post('/users/register', async (req, res) => {
  try {
    let user = await userModel.findOne({ email: req.body.email });
    if (user) {
      throw new Error('Email already exist');
    }
    user = new userModel(req.body);
    await user.save();

    const token = await user.generateAuthToken();

    // res.status(201).send({ user, token });
    res.status(200).json({ message: 'User Added Successfully!', token: token });
    // const userExists = new userModel.findOne(user.email);
    // console.log(userExists);

    // if (userExists) {
    //   res.status(400);
    //     throw new Error('User Already Register');
    // }

    // if (user) {
    //   res.status(201).send(user);
    // } else {
    //   res.status(404);
    //     throw new Error('Error Occured');
    // }
  } catch (e) {
    res.status(400).send(e);
  }
});

// -- Login User -- //

routerUser.post('/users/login', auth, async (req, res) => {
  try {
    console.log(req.body);
    const user = await userModel.findByCredentials(
      req.body.email,
      req.body.password
    );
    console.log(user);
    const token = await user.generateAuthToken();
    console.log(token);
    res.send({ user, token });
  } catch (e) {
    res.status(404).send();
  }

  // try {
  //   const { email, password } = req.body;
  //   const user = await userModel.findOne({ email });
  //   // console.log(user);
  //   if (user && (await user.matchPassword(password))) {
  //     res.status(201).send({ user });
  //   } else {
  //     res.status(404).send('Invalid Credentials');
  //   }
  // } catch (e) {
  //   res.status(400).send(e);
  // }
});

// -- Logout User -- //

routerUser.post('/users/logout', auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();

    res.status(200).send('Logout Scuccesfully' + req.user);
  } catch (e) {
    res.status(400).send();
  }
});

// --All User Logout User -- //

routerUser.post('/users/logoutAll', auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.status(200).send('All User Logout Scuccesfully' + req.user);
  } catch (e) {
    res.status(500).send();
  }
});

// -- Read User Registration -- //

routerUser.get('/users/register', async (req, res) => {
  try {
    const getUser = await userModel.find();

    res.status(201).send({ getUser });
  } catch (e) {
    res.status(400).send('Error' + e);
  }
});

// -- Read User Registration By Name-- //

routerUser.get('/users/register/:name', async (req, res) => {
  try {
    const username = req.params.name;
    // console.log(username);
    const getUserByName = await userModel.find({ username });
    // console.log(getUserByName);
    if (!getUserByName) {
      return res.status(404).send('User Not Found');
    } else {
      res.status(201).send(getUserByName);
    }
  } catch (e) {
    res.status(400).send('Error' + e);
  }
});

// -- Update User Registration-- //

routerUser.put('/users/register/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    // console.log(_id);
    const updateUser = await userModel.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    // console.log(updateUser);
    if (!updateUser) {
      return res.status(404).send('User Not Found');
    } else {
      res.status(201).send(updateUser);
    }
  } catch (e) {
    res.status(400).send('Error' + e);
  }
});

// -- Delete User Registration-- //

routerUser.delete('/users/register/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    // console.log(_id);
    const deleteUser = await userModel.findByIdAndDelete(_id);
    // console.log(deleteUser);
    if (!deleteUser) {
      return res.status(404).send('User Not Found');
    } else {
      res.status(201).send('Successfully Deleted  ' + deleteUser);
    }
  } catch (e) {
    res.status(400).send('Error   ' + e);
  }
});

module.exports = routerUser;
