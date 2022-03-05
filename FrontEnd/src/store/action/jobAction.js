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

export function addAllJobs(data) {
  return async (dispatch) => {
    try {
      let res = await axios.post("http://localhost:5000/recruiter/job", data);
      console.log(res);
      return dispatch({
        type: "ADD_JOB",
        payload: res,
      });
    } catch (err) {
      return err;
    }
  };
}

export function updateJobs({ title, skill, jobType, salary, position, id }) {
  // console.log(title, skill, jobType, salary, position, id );
  return async (dispatch) => {
    try {
      let res = await axios.patch(
        `http://localhost:5000/recruiter/job/${id}`,
      {  title,
        skill,
        jobType,
        salary,
        position}
      );
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

export function deleteJobs() {
  return async (dispatch) => {
    try {
      let res = await axios.delete("http://localhost:5000/recruiter/job/:id");
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
