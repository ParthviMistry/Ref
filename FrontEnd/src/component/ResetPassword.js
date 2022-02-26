import {
  Grid,
  Paper,
  Typography,
  Button,
  TextField,
  makeStyles,
} from '@material-ui/core';

import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

import Navbar from './Navbar';

const useStyles = makeStyles(() => ({
  body: {
    padding: '60px 60px',
    margin: '125px 350px',
  },
  inputBox: {
    width: '300px',
    margin: '-12px',
  },
  submitButton: {
    width: '300px',
    margin: '15px',
    backgroundColor: '#034f84',
    color: 'white',
  },
  LinkColor: {
    textDecoration: 'none',
    color: 'black',
  },
}));

const ResetPassword = (props) => {
  const classes = useStyles();

  const emailRef = useRef();

  const url = 'http://localhost:5000/users/sendemail';

  const submitHandler = async (e) => {
    e.preventDefault();

    axios
      .post(url, {
        data: { email: emailRef.current.value },
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <form onSubmit={submitHandler}>
      <Paper elevation={3} className={classes.body}>
        <Navbar />
        <Grid container direction="column" spacing={4} alignItems="center">
          <Grid item>
            <Typography variant="h4" component="h2">
              Reset Password
            </Typography>
          </Grid>
          {/* <Grid item>
          <TextField
            id="txtPassword"
            type="password"
            label="Password"
            className={classes.inputBox}
          />
        </Grid>
        <Grid item>
          <TextField
            id="txtConfirmPassword"
            type="password"
            label="Confirm Password"
            className={classes.inputBox}
          />
        </Grid> */}
          <Grid item>
            <TextField
              id="email"
              type="email"
              label="Email"
              ref={emailRef}
              className={classes.inputBox}
            />
          </Grid>
          <Grid item>
            <Button
              id="btnSubmit"
              variant="contained"
              className={classes.submitButton}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
};

export default ResetPassword;
