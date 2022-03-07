import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ApplicantNavbar from "./ApplicantNavbar";
import { getAllJobs } from "../../store/action/jobAction";

import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";

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

function ViewJob(props) {
  const classes = useStyles();

  const getJobs = async () => {
    await props?.getAllJobs();
  };
  useEffect(() => {
    getJobs();
  }, []);

  return (
    <>
      <Paper elevation={3} className={classes.body}>
     
        <ApplicantNavbar />
        <Grid container direction="column" spacing={4} alignItems="center">
          <Grid item>
            <Typography variant="h4" component="h2">
              Recent Jobs
            </Typography>
            <table>
              {props?.job?.data?.getJob?.length &&
                props?.job?.data?.getJob?.map((job, id) => (
                  <tr>
                    <td>{job.title}</td>
                    <td>{job.skill}</td>
                    <td>{job.salary}</td>
                    <td>{job.position}</td>
                    <td>{job.jobType}</td>
                    <td> <button>Apply</button></td>
                  </tr>
                ))}
            </table>
          </Grid>
        </Grid>
      </Paper>
          
      
    </>
  );
}

// export default ViewJob;

const mapStateToProps = (state) => {
  return {
    job: state.jobs.alljob,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getAllJobs: () => getAllJobs(),
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewJob);
