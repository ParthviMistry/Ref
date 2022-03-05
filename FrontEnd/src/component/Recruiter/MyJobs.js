import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Navbar from "../Navbar";
import DeleteJob from "./DeleteJob";
import EditJob from "./EditJob";
import {
  getAllJobs,
  deleteJobs,
  getJobsById,
} from "../../store/action/jobAction";
import { styled } from "@mui/material/styles";
import {
  Grid,
  Paper,
  Typography,
  Button,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  DialogActions,
  TableHead,
  useTheme,
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogContent,
  TextField,
} from "@material-ui/core";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import { toast } from "react-toastify";

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
  tableBody: {
    margin: "130px 300px",
  },
  heading: {
    marginBottom: "60px ",
    align: "center",
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.common,
  fontSize: 14,
  align: "left",
  padding: 20,
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const MyJobs = (props) => {
  const classes = useStyles();
  // const jobs = useSelector((state) => state);
  // const [jobs, setJobs] = React.useState([]);
  // console.log("JOBS :::", jobs)

  const dispatch = useDispatch();

  let navigate = useNavigate();

  const deleteHandler = async (id) => {
    // setOpen({
    //   ...open,
    //   dialog: true,
    //   id:id
    // });
    // console.log("ID::::", id)
    handleClickOpen(id);
    // await props?.deleteJobs(id);
    // getJobs()
  };

  const editHandler = async (id) => {
    // history(`/editjob/${job._id}`);
    console.log(id);

    // dispatch({ type: "UPDATE_JOB", payload: id });
    // console.log("Updated!!")
    // toast.success("Deleted")
  };
  const [open, setOpen] = React.useState({ dialog: false, id: "" });
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = (id) => {
    setOpen({
      ...open,
      dialog: true,
      id: id,
    });
    console.log("iddddd::::", id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const aggreDelete = async (id) => {
    setOpen({
      ...open,
      dialog: false,
      id: id,
    });
    console.log("AGREE ID::::::", id);
    await props?.deleteJobs(id);
    getJobs();
    console.log("Delete Succesfully", id);
  };
  const getJobs = async () => {
    await props?.getAllJobs();
  };
  useEffect(() => {
    getJobs();
  }, []);

  return (
    <>
      {console.log(props?.job?.data)}
      <Navbar />
      <div className={classes.tableBody}>
        <Grid container direction="column" spacing={4} alignItems="center">
          <Grid item>
            <div className={classes.heading}>
              <Typography variant="h4" component="h2">
                My Jobs
              </Typography>
            </div>
            <TextField
              id="search"
              type="text"
              label="Search"
              className={classes.inputBox}
              variant="outlined"
            />
          </Grid>
          <Grid item></Grid>
        </Grid>

        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Sr. No </StyledTableCell>
                <StyledTableCell>Title</StyledTableCell>
                <StyledTableCell>Skills</StyledTableCell>
                <StyledTableCell>Salary</StyledTableCell>
                <StyledTableCell>Position</StyledTableCell>
                <StyledTableCell>Job Types</StyledTableCell>
                <StyledTableCell>Edit</StyledTableCell>
                <StyledTableCell>Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props?.job?.data?.getJob?.length &&
                props?.job?.data?.getJob?.map((job, id) => (
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      {id + 1}
                    </StyledTableCell>
                    <StyledTableCell>{job.title}</StyledTableCell>
                    <StyledTableCell>{job.skill}</StyledTableCell>
                    <StyledTableCell>{job.salary}</StyledTableCell>
                    <StyledTableCell>{job.position}</StyledTableCell>
                    <StyledTableCell>{job.jobType}</StyledTableCell>
                    <StyledTableCell>
                      <Button
                        component={Link}
                        to={`/editjob/${job._id}`}
                        variant="outlined"
                        // onClick={() => {navigate(`/editjob/${job._id}`)}}
                      >
                        Edit
                      </Button>
                    </StyledTableCell>
                    <StyledTableCell>
                      <Button
                        variant="outlined"
                        onClick={() => deleteHandler(job._id)}
                      >
                        Delete
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <Dialog
        fullScreen={fullScreen}
        open={open.dialog}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Confirm the action"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are You Sure You Want to Delete Data?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={() => aggreDelete(open.id)} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    job: state.jobs.alljob,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getAllJobs: () => getAllJobs(),
      deleteJobs: (id) => deleteJobs(id),
    },
    dispatch
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(MyJobs);
