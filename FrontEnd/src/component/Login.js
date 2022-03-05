import {
  Grid,
  Paper,
  Typography,
  Button,
  TextField,
  makeStyles,
} from '@material-ui/core';

import { useState, useEffect } from 'react';
import { Link, useHref } from 'react-router-dom';
import axios from 'axios';
import isAuth from '../lib/isAuth';

// import cors from 'cors';
import Navbar from './Navbar';

// makeStyles use for CSS

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
    margin: '0px 15px',
    backgroundColor: '#034f84',
    color: 'white',
  },
  LinkColor: {
    textDecoration: 'none',
    color: 'black',
  },
}));

const Login = (props) => {
  const classes = useStyles();

  // let history = useHistory();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);

  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   console.log(email, password);

  //   try {
  //     const config = {
  //       headers: {
  //         'Content-type': 'application/json',
  //       },
  //     };

  //     setLoading(true);
  //     const { data } = await axios.post('localhost:3000/users/login', {
  //       email,
  //       password,
  //     });

  //     console.log(data);

  //     localStorage.setItem('userInfo', JSON.stringify(data));
  //     setLoading(false);
  //   } catch (e) {
  //     console.log('Erroe' + e);
  //     // setError(e.response.data.message);
  //   }
  // };

  // const url = 'http://localhost:5000/users/login';

  // const [user, setUser] = useState({
  //   email: '',
  //   password: '',
  // });

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post(url, {
  //       email: user.email,
  //       password: user.password,
  //     })
  //     .then((res) => {
  //       console.log(res.user);
  //     });
  // };

  // const inputHandler = (e) => {
  //   e.preventDefault();
  //   const newdata = { ...user };
  //   console.log(newdata);
  //   newdata[e.target.id] = e.target.value;
  //   setUser(newdata);
  //   console.log(newdata);
  // };

  const [loggedin, setLoggedin] = useState(isAuth());

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const inputHandler = (key, value) => {
    // e.preventDefault();
    setData({
      ...data,
      [key]: value,
    });
  };
  //setData({ ...data, [input.name]: input.value });

  const submitHandler = () => {
    console.log(data);

    // console.log(e.target.value);
    // setJobType();

    const url = 'http://localhost:5000/users/login';

    axios
      .post(url, { email: data.email, password: data.password })
      .then((res) => {
        console.log(res.data);
        let t = localStorage.setItem('token', res.data.token);
        console.log('token' + t);
        localStorage.setItem('type', res.data.type);
        setLoggedin(isAuth());
        console.log('Logged in successfully');
        console.log(res);
      })
      .catch((e) => {
        console.log('Error' + e);
      });
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // try {
  //   // const url = 'http://localhost:5000/users/login';
  //   //   const { data: res } = await axios.post(url, data);

  //   //   localStorage.setItem('token', res.data.token);

  //   //   window.location = '/home';
  //   // } catch (error) {
  //   //   console.log('Error' + error);
  //   // }

  //   const url = 'http://localhost:5000/users/login';
  //   axios
  //     .post(url, {
  //       email: data.email,
  //       password: data.password,
  //     })
  //     .then((res) => {
  //       console.log(res.user);
  //       localStorage.setItem('token', res.data.token);
  //       localStorage.setItem('types', res.data.types);
  //       setLoggedin(isAuth());
  //       console.log('Logged in successfully');
  //       console.log(res);
  //     });
  // };

  return (
    // Paper use as container , elevation - for shadow

    <Paper elevation={3} className={classes.body}>
      <Navbar />
      <Grid container direction="column" spacing={4} alignItems="center">
        <Grid item>
          {/*  Typography use for size or different heading tag */}

          <Typography variant="h4" component="h2">
            Login
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            id="email"
            type="text"
            label="Email"
            className={classes.inputBox}
            value={data.email}
            onChange={(event) => inputHandler('email', event.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            id="password"
            type="password"
            label="Password"
            className={classes.inputBox}
            value={data.password}
            onChange={(event) => inputHandler('password', event.target.value)}
          />
        </Grid>
        <Grid item>
          <Typography variant="subtitle2">
            <Link to="/resetpassword" className={classes.LinkColor}>
              Forgot Password?
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Button
            id="btnLogin"
            variant="contained"
            type="submit"
            className={classes.submitButton}
            onClick={submitHandler}
          >
            Login
          </Button>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2">
            <Link to="/Signup" className={classes.LinkColor}>
              Create an Account?
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Login;
