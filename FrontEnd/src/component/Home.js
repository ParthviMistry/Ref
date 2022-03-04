import React from "react";
import Navbar from "./Navbar";
import { makeStyles, Paper, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  body: {
    padding: "260px 60px",
    margin: "125px 350px",
  },
  inputBox: {
    width: "300px",
    margin: "-12px",
  },
  submitButton: {
    width: "300px",
    margin: "15px",
    backgroundColor: "#034f84",
    color: "white",
  },
  LinkColor: {
    textDecoration: "none",
    color: "black",
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <>
      <Paper elevation={3} className={classes.body}>
        <Navbar />
        <Grid container direction="column" spacing={4} alignItems="center">
          <Grid item>
            <Typography variant="h4" component="h2">
              Welcome to Job Portal
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default Home;
