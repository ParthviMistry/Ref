import {
  Grid,
  Paper,
  Typography,
  Button,
  TextField,
  makeStyles,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@material-ui/core';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Navbar from './Navbar';
import { useNavigate, Link } from "react-router-dom";

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

const Signup = () => {
  const classes = useStyles();
  
  const history = useNavigate();

  const url = 'http://localhost:5000/users/register';

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    cpassword: '',
    types: '',
  });

  const submitHandler = (e) => {
    // try {
    //   let response = await axios.post(url, {
    //     username: user.username,
    //     email: user.email,
    //     password: user.password,
    //     cpassword: user.cpassword,
    //     types: user.types, 
    //   });

    //   if (response.status === 200) {
    //     toast.success('Added');
    //   }
    // } catch (e) {
    //   toast.error('Somthing went wrong');
    // }
    
    // console.log(user);
    localStorage.setItem('Usename', JSON.stringify(user.username));
    localStorage.setItem('Email', JSON.stringify(user.email));
    localStorage.setItem('Password', JSON.stringify(user.password));
    localStorage.setItem('CPassword', JSON.stringify(user.cpassword));
    localStorage.setItem('Types', JSON.stringify(user.types));

    axios
      .post(url, {
        username: user.username,
        email: user.email,
        password: user.password,
        cpassword: user.cpassword,
        types: user.types,      
      })
      .then((res) => {
        // toast.success("Registration Succesfully Completed!!")
        console.log("Registration Succesfully Completed!", res.user);
        history('/home');
      }).catch((e) => {
        // toast.error("Somthing went wrong!!")
        console.log("Somthing went wrong!!",e)
      });
  };

  const inputHandler = (key, value) => {
    // console.log(user);
    setUser({
      ...user,
      [key]: value,
    });
  };

  // const inputHandler = (e) => {
  //   e.preventDefault();
  //   // console.log(user.types);
  //   const newdata = { ...user };
  //   console.log(newdata);
  //   newdata[e.target.id] = e.target.value;
  //   setUser(newdata);
  //   console.log(newdata);
  // };

  // const [username, setusername] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [type, setType] = useState('');
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);

  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   console.log(username, email, password, type);

  //   try {
  //     const config = {
  //       headers: {
  //         'Content-type': 'application/json',
  //         'Access-Control-Allow-Origin': '*',
  //       },
  //     };

  //     setLoading(true);
  //     const { data } = await axios.post(
  //       'http://localhost:3000/users/register',
  //       {
  //         username,
  //         email,
  //         password,
  //         type,
  //       },
  //       config
  //     );

  //     console.log(data);

  //     localStorage.setItem('userInfo', JSON.stringify(data));
  //     setLoading(false);
  //   } catch (e) {
  //     console.log('Error' + e);
  //     // setError(e.response.data.message);
  //   }
  // };

  return (
    <Paper elevation={3} className={classes.body}>
      <Navbar />
      <Grid container direction="column" spacing={4} alignItems="center">
        <Grid item>
          <Typography variant="h4" component="h2">
            Signup
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            id="username"
            type="text"
            label="Username"
            className={classes.inputBox}
            onChange={(event) => {
              inputHandler('username', event.target.value);
            }}
            value={user.username}
          />
        </Grid>
        <Grid item>
          <TextField
            id="email"
            type="email"
            label="Email"
            className={classes.inputBox}
            onChange={(event) => {
              inputHandler('email', event.target.value);
            }}
            value={user.email}
          />
        </Grid>
        <Grid item>
          <TextField
            id="password"
            type="password"
            label="Password"
            className={classes.inputBox}
            onChange={(event) => {
              inputHandler('password', event.target.value);
            }}
            value={user.password}
          />
        </Grid>
        <Grid item>
          <TextField
            id="cpassword"
            type="password"
            label="Confirm Password"
            className={classes.inputBox}
            onChange={(event) => {
              inputHandler('cpassword', event.target.value);
            }}
            value={user.cpassword}
          />
        </Grid>
        <Grid item>
          <FormControl fullWidth className={classes.inputBox}>
            <InputLabel>Type</InputLabel>
            <Select
              id="types"
              onChange={(event) => {
                inputHandler('types', event.target.value);
              }}
              value={user.types}
            >
              <MenuItem value="applicant">Applicant</MenuItem>
              <MenuItem value="recruiter">Recruiter</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <Button
            id="btnSignup"
            variant="contained"
            className={classes.submitButton}
            type="submit"
            onClick={submitHandler}
          >
            Signup
          </Button>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2">
            <Link to="/Login" className={classes.LinkColor}>
              Already have an Account?
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Signup;
