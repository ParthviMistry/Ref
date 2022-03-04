import React, { useState } from "react";

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
} from "@material-ui/core";

import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";

import Navbar from "../../Navbar";

// makeStyles use for CSS

const useStyles = makeStyles(() => ({
  body: {
    padding: "60px",
    margin: "125px 600px",
  },
  inputBox: {
    width: "450px",
    margin: "-12px",
  },
  submitButton: {
    width: "200px",
    margin: "30px",
    marginBottom: "0px",
    backgroundColor: "#034f84",
    color: "white",
  },
  LinkColor: {
    textDecoration: "none",
    color: "white",
  },
}));

const AddJob = (props) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const history = useNavigate();

  const jobs = useSelector((state) => state);
  console.log("JOBS :::", jobs);

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
    title: "",
    skill: "",
    jobType: "",
    salary: 0,
    position: 0,
  });

  const submitHandler = (e) => {
    console.log("JOB DETAIL :::", jobDetail);

    // const checkTitle = jobs.find((job) => job.title === title && title);

    // const checkSkill = jobs.find((job) => job.skill === skill && skill);

    // const checkjobType = jobs.find((job) => job.jobType === jobType && jobType);

    // const checkSalary = jobs.find((job) => job.salary === salary && salary);

    // const checkPosition = jobs.find(
    //   (job) => job.position === position && position
    // );

    if (
      !jobDetail.title ||
      !jobDetail.skill ||
      !jobDetail.jobType ||
      !jobDetail.salary ||
      !jobDetail.position
    ) {
      //  toast.warning("Please fill all details");
      console.log("Please fill all details");
      history("/addjob");
    }

    const data = {
      id: jobs[jobs.length - 1].id + 1,
      ...jobDetail,
      //  jobDetail.title,
      //  jobDetail.skill,
      //  jobDetail.jobType,
      //  jobDetail.position,
      //  jobDetail.salary,
    };
    console.log("DATA :::",data);

    //  toast.success("Added");
    //  history("/myjob");
    // console.log(e.target.value);
    // setJobType();

    dispatch({ type: "ADD_JOB", payload: data });
    console.log("Dispatch Job Added Successfully!!");
    history("/myjob");
    
    const url = "http://localhost:5000/recruiter/job";

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
        // console.log("Job Added Succesfully!!", res.jobDetail);
        // history('/myjob')
      })
      .catch((e) => {
        // toast.error("Somthing went wrong!!")
        console.log(e);
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
              inputHandler("title", event.target.value);
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
              inputHandler("skill", event.target.value);
            }}
          />
        </Grid>

        <Grid item>
          <FormControl fullWidth className={classes.inputBox}>
            <InputLabel>Job Type</InputLabel>
            <Select
              id="jobType"
              value={jobDetail.jobType}
              onChange={(event) => {
                inputHandler("jobType", event.target.value);
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
              inputHandler("salary", event.target.value);
            }}
          />
        </Grid>

        <Grid item>
          <TextField
            id="position"
            type="number"
            label="Position"
            className={classes.inputBox}
            value={jobDetail.position}
            onChange={(event) => {
              inputHandler("position", event.target.value);
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
