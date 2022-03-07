import axios from "axios";

export function getAllJobs() {
  return async (dispatch) => {
    try {
      let res = await axios.get("http://localhost:5000/recruiter/job");
      //   console.log(res);
      return dispatch({
        type: "GET_ALL_JOBS",
        payload: res,
      });
    } catch (err) {
      return err;
    }
  };
}

export function getJobsById(id) {
  return async (dispatch) => {
    try {
      let res = await axios.get(`http://localhost:5000/recruiter/job/${id}`);
      return dispatch({
        type: "GET_JOBS_BY_ID",
        payload: res,
      });
    } catch (err) {
      return err;
    }
  };
}

export function getProfile(id) {
  return async (dispatch) => {
    try {
      console.log("GET PROFILE ACTION :::");
      let res = await axios.get(`http://localhost:5000/users/register/${id}`);
      console.log("IDD :::", id);
      return dispatch({
        type: "GET_PROFILE",
        payload: res,
      });
    } catch (err) {
      return err;
    }
  };
}

export function addAllJobs(data) {
  return async (dispatch) => {
    try {
      console.log("Add Job:::");
      let res = await axios.post("http://localhost:5000/recruiter/job", data);
      console.log("Add Job:::", res);
      return dispatch({
        type: "ADD_JOB",
        payload: res,
      });
    } catch (err) {
      return err;
    }
  };
}

export function updateJobs({ companyname, title, skill, jobType, salary, position, id }) {
  // console.log(title, skill, jobType, salary, position, id );
  return async (dispatch) => {
    try {
      let res = await axios.patch(`http://localhost:5000/recruiter/job/${id}`, {
        companyname,
        title,
        skill,
        jobType,
        salary,
        position,
      });
      console.log("UPDATE_JOB_____", res);
      return dispatch({
        type: "UPDATE_JOB",
        payload: res,
      });
    } catch (err) {
      return err;
    }
  };
}

export function deleteJobs(id) {
  return async (dispatch) => {
    try {
      let res = await axios.delete(`http://localhost:5000/recruiter/job/${id}`);
      //   console.log(res);
      return dispatch({
        type: "DELETE_JOB",
        payload: res,
      });
    } catch (err) {
      return err;
    }
  };
}

// Applicant

// export function applicantJob() {
//   return async (dispatch) => {
//     try {
//       let res = await axios.get("http://localhost:5000/recruiter/job");
//         console.log(res);
//       return dispatch({
//         type: "APPLICANT_JOB",
//         payload: res,
//       });
//     } catch (err) {
//       return err;
//     }
//   };
// }
