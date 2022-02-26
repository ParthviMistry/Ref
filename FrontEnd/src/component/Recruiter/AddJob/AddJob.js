import React from 'react';

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

import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Navbar from '../../Navbar';

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
    color: 'white',
  },
}));

const AddJob = (props) => {
  const classes = useStyles();

  // console.log(props.title);

  // const handleSubmit = (e) => {
  //   // e.preventDefault();
  //   // console.log(jobTypes);
  //   // console.log(e.target.value);
  //   // setJobType();
  //   const url = 'http://localhost:5000/users/register';
  //   axios
  //     .post(url, {
  //       jobType: jobTypes,
  //       // types: user.types,
  //     })
  //     .then((res) => {
  //       console.log(res.user);
  //     });
  // };

  // const skills = [
  //   { skills: 'node', id: 1 },
  //   { skills: 'react', id: 2 },
  //   { skills: 'angular', id: 3 },
  //   { skills: 'php', id: 4 },
  //   { skills: 'asp.net', id: 5 },
  //   { skills: 'python', id: 6 },
  // ];

  const [jobDetail, setjobDetail] = useState({
    title: '',
    skill: '',
    jobType: '',
    salary: 0,
    position: 0,
  });

  const submitHandler = () => {
    console.log(jobDetail);

    // console.log(e.target.value);
    // setJobType();

    const url = 'http://localhost:5000/recruiter/addjob';

    axios
      .post(url, {
        title: jobDetail.title,
        skill: jobDetail.skill,
        jobType: jobDetail.jobType,
        salary: jobDetail.salary,
        position: jobDetail.position,
      })
      .then((res) => {
        console.log(res.jobDetail);
      });
  };

  const inputHandler = (key, value) => {
    // e.preventDefault();
    setjobDetail({
      ...jobDetail,
      [key]: value,
    });
  };

  return (
    // Paper use as container , elevation - for shadow
    <Paper elevation={3} className={classes.body}>
      <Navbar />
      <Grid container direction="column" spacing={4} alignItems="center">
        <Grid item>
          {/*  Typography use for size or different heading tag */}
          <Typography variant="h4" component="h2">
            Add Jobs
          </Typography>
        </Grid>

        <Grid item>
          <TextField
            id="title"
            type="text"
            label="Title"
            className={classes.inputBox}
            value={jobDetail.title}
            onChange={(event) => {
              inputHandler('title', event.target.value);
            }}
          />
        </Grid>

        <Grid item>
          <TextField
            id="skill"
            type="text"
            label="Skill"
            className={classes.inputBox}
            value={jobDetail.skill}
            onChange={(event) => {
              inputHandler('skill', event.target.value);
            }}
          />
        </Grid>

        <Grid item>
          <FormControl fullWidth className={classes.inputBox}>
            <InputLabel>Job Type</InputLabel>
            <Select
              id="jobtype"
              value={jobDetail.jobType}
              onChange={(event) => {
                inputHandler('jobType', event.target.value);
              }}
            >
              <MenuItem disabled value="">
                Select
              </MenuItem>
              <MenuItem value="Full Time">Full Time</MenuItem>
              <MenuItem value="Part Time">Part Time</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item>
          <TextField
            id="salary"
            type="text"
            label="Salary"
            className={classes.inputBox}
            value={jobDetail.salary}
            onChange={(event) => {
              inputHandler('salary', event.target.value);
            }}
          />
        </Grid>

        <Grid item>
          <TextField
            id="position"
            type="position"
            label="Position"
            className={classes.inputBox}
            value={jobDetail.position}
            onChange={(event) => {
              inputHandler('position', event.target.value);
            }}
          />
        </Grid>

        <Grid item>
          <Link to="/myjob" className={classes.LinkColor}>
            <Button
              id="btnSubmit"
              variant="contained"
              type="submit"
              className={classes.submitButton}
              onClick={submitHandler}
            >
              Submit
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AddJob;
