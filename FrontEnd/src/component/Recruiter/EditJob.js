import React, { useState, useEffect } from "react";

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
import { useNavigate, Link, useParams } from "react-router-dom";
import { updateJobs } from "../../store/action/jobAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Navbar from "../Navbar";
import { getJobsById } from "../../store/action/jobAction";
const useStyles = makeStyles(() => ({
  body: {
    padding: "60px 60px",
    margin: "125px 350px",
  },
  inputBox: {
    width: "300px",
    margin: "-12px",
  },
  submitButton: {
    width: "300px",
    margin: "0px 15px",
    backgroundColor: "#034f84",
    color: "white",
  },
  LinkColor: {
    textDecoration: "none",
    color: "white",
  },
}));

const EditJob = (props) => {
  const classes = useStyles();

  const { id } = useParams();
  // console.log("id:::", id)

  // const jobs = useSelector((state) => state);
  // console.log("JOBS :::", jobs);

  // const currentJob = jobs.find(
  //   (job) => job.id === parseInt(id)
  // );
  // console.log("CURRENT JOB:::", currentJob)

  let [jobDetail, setjobDetail] = useState({
    // title: currentJob.title,
    // skill: currentJob.skill,
    // jobType: currentJob.jobType,
    // salary: currentJob.salary,
    // position:currentJob.position,
    title: "",
    skill: "",
    jobType: "",
    salary: 0,
    position: 0,
  });

  // let [jobDetail, setjobDetail] = useState({title:"",skill:"",jobType,salary,position  });

  // useEffect(() => {
  //   console.log("SETJOBDETAIL FIRST::::",setjobDetail)
  //   if (currentJob) {
  //     console.log("SETJOBDETAIL ::::",setjobDetail)
  //     setjobDetail({
  //       ...jobDetail,

  //     });
  //     console.log("SETJOBDETAIL ::::",setjobDetail)
  //   }
  // }, [currentJob]);

  const getjobid = async (id) => {
    await props.getJobsById(id);
  };

  useEffect(() => {
    getjobid(id);
  }, []);

  useEffect(() => {
    if (props?.jobByid) {
      setjobDetail({
        title: props?.jobByid?.data?.title,
        skill: props?.jobByid?.data?.skill,
        jobType: props?.jobByid?.data?.jobType,
        salary: props?.jobByid?.data?.salary,
        position: props?.jobByid?.data?.position,
      });
    }
  }, [props?.jobByid]);

  const dispatch = useDispatch();

  const history = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      title:jobDetail.title,
      skill: jobDetail.skill,
      jobType: jobDetail.jobType,
      salary: jobDetail.salary,
      position: jobDetail.position,
      id:id
    };
    console.log("DATA:::",data);
    

    props?.updateJobs(data);

    // dispatch({ type: "UPDATE_JOB", payload: data });
    // //  toast.success("Updated");
    // history("/myjob");

    // const url = `http://localhost:5000/recruiter/job/:${currentJob.id}`;

    // axios
    //   .post(url, {
    //     title: jobDetail.title,
    //     skill: jobDetail.skill,
    //     jobType: jobDetail.jobType,
    //     salary: jobDetail.salary,
    //     position: jobDetail.position,
    //   })
    //   .then((res) => {
    //     console.log(res.jobDetail);
    //   });
  };

  // const inputHandler = (key, value) => {
  //   // e.preventDefault();
  //   setjobDetail({
  //     ...jobDetail,
  //     [key]: value,
  //   });
  // };

  return (
    <Paper elevation={3} className={classes.body}>
      {/* {console.log(jobDetail.jobType.trim())} */}
      <Navbar />
      <Grid container direction="column" spacing={4} alignItems="center">
        <Grid item>
          <Typography variant="h4" component="h2">
            Edit Jobs
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
             setjobDetail({...jobDetail,title: event.target.value})
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
              setjobDetail({...jobDetail,skill: event.target.value})
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
                setjobDetail({...jobDetail,jobType: event.target.value})
              }}
            >
              <MenuItem disabled value="">
                Select
              </MenuItem>
              <MenuItem value="full time">Full Time</MenuItem>
              <MenuItem value="part time">Part Time</MenuItem>
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
              setjobDetail({...jobDetail,salary: event.target.value})
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
              setjobDetail({...jobDetail,position: event.target.value})
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

// export default EditJob;
const mapStateToProps = (state) => {
  return {
    jobByid: state.jobs.jobByid,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getJobsById: (id) => getJobsById(id),
      updateJobs: (data) => updateJobs(data),
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(EditJob);
