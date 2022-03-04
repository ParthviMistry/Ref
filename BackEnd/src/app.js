const express = require('express');
const app = express();

const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors());

const jwt = require('jsonwebtoken');
require('dotenv').config();
// const dotenv = require('dotenv');
const { notFound, errorHandler } = require('./middelware/errors');
const auth = require('./middelware/auth');

require('../src/db/con');
const routerUser = require('./router/userRtr');
const routerJob = require('./router/jobRtr');
// const { routeSendEmail, mailer } = require('./router/sendEmail');
// const routeChangePassword = require('./router/changePassword');

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(routerUser);
app.use(routerJob);
// app.use(routeSendEmail, mailer);
// app.use(routeChangePassword);
app.use(auth);

app.use(notFound);
app.use(errorHandler);


const myFunction = async () => {
  const token = jwt.sign({ _id: 'abc123' }, 'JobPortal', {
    expiresIn: '7 days',
  });
  console.log('myfunction  token: ' + token);

  const data = jwt.verify(token, 'JobPortal');
  console.log(data);
};

myFunction();

app.listen(port, () => {
  console.log('Running on ' + port);
});
