import React from "react";
import AddJob from "./AddJob/AddJob";
import Navbar from "../Navbar";

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
  TableHead,
} from "@material-ui/core";

import {Icon, DeleteIcon} from '@mui/material'

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

  const jobs = useSelector((state) => state);

  const dispatch = useDispatch();

  const history = useNavigate();

  const editJob = (e) => {
    // e.preventDefault();
    history("/editjob");
  }

  const deleteJob = (e) => {
    // e.preventDefault();
    history("/deletejob");
  }

  return (
    <>
      <Navbar />
      <div className={classes.tableBody}>
        <Grid container direction="column" spacing={4} alignItems="center">
          <Grid item>
            <div className={classes.heading}>
              <Typography variant="h4" component="h2">
                My Jobs
              </Typography>
            </div>
          </Grid>
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
              {jobs.map((job, id) => (
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    {id}
                  </StyledTableCell>
                  <StyledTableCell>{job.title}</StyledTableCell>
                  <StyledTableCell>{job.skill}</StyledTableCell>
                  <StyledTableCell>{job.salary}</StyledTableCell>
                  <StyledTableCell>{job.position}</StyledTableCell>
                  <StyledTableCell>{job.jobType}</StyledTableCell>
                  <StyledTableCell>
                  <Button variant="outlined" onClick={() => editJob()}>Edit</Button>
                  </StyledTableCell>
                  <StyledTableCell>
                  <Button variant="outlined" onClick={() => deleteJob()}>Delete</Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
    // <div className="container">
    //   <div className="row d-flex flex-column">
    //     <Link to="/add" className="btn btn-outline-dark my-5 ml-auto ">
    //       My Job
    //     </Link>
    //   </div>
    //   <div className="col-md-10 mx-auto my-4">
    //     <table className="table table-hover">
    //       <thead className="table-header bg-dark text-white">
    //         <tr>
    //           <th scope="col">Id</th>
    //           <th scope="col">Title</th>
    //           <th scope="col">Skill</th>
    //           <th scope="col">Job Type</th>
    //           <th scope="col">Salary</th>
    //           <th scope="col">Position</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {jobs.map((job, id) => (
    //           <tr key={id}>
    //             <td>{id + 1}</td>
    //             <td>{job.title}</td>
    //             <td>{job.skill}</td>
    //             <td>{job.jobType}</td>
    //             <td>{job.salary}</td>
    //             <td>{job.position}</td>
    //             <td>
    //               <Link
    //                 to="/"
    //                 // to={`/edit/${contact.id}`}
    //                 className="btn btn-small btn-primary mr-2"
    //               >
    //                 Edit
    //               </Link>
    //               <button
    //                 type="button"
    //                 // onClick={() => deleteContact(contact.id)}
    //                 className="btn btn-sm btn-danger"
    //               >
    //                 Delete
    //               </button>
    //             </td>
    //             {/* <td>
    //               <Link
    //                 to={`/edit/${contact.id}`}
    //                 className="btn btn-small btn-danger mr-2"
    //               >
    //                 Delete
    //               </Link>
    //             </td> */}
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
  );
};

export default MyJobs;
