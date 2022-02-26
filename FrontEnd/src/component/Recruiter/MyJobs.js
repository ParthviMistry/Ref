import React from 'react';
import AddJob from './AddJob/AddJob';
import Navbar from '../Navbar';

import {
  Grid,
  Paper,
  Typography,
  Button,
  TextField,
  makeStyles,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from '@material-ui/core';

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
    color: 'white',
  },
}));

const MyJobs = (props) => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      {/* <Grid
        container
        item
        direction="column"
        alignItems="center"
        style={{
          padding: '30px',
          margin: '80px 20px 0pc 20px',
          minHeight: '93vh',
        }}
      >
        <Grid
          item
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xs>
            <Typography variant="h4" component="h2">
              My Jobs
            </Typography>
          </Grid>
          <Grid item xs>
            <TextField
              label="Search Jobs"
              style={{ width: '500px' }}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </Grid> */}

      <Paper elevation={3} className={classes.body}>
        <Grid container direction="column" spacing={4} alignItems="center">
          <Grid item>
            <Typography variant="h4" component="h2">
              My Jobs
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs>
          <TextField
            label="Search Jobs"
            style={{ width: '500px' }}
            variant="outlined"
          />
        </Grid>
        <h4>List</h4>
        <h4>Company Name</h4>
        <h4>Job Title</h4>
        <h4>Skill</h4>
        <h4>Job Type</h4>
        <h4>Salary</h4>
        <h4>Position</h4>
      </Paper>
    </>
  );
};

export default MyJobs;
