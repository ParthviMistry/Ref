const initialState = [
  {
    id: 0,
    title: "test",
    skill: "node",
    salary: 2000,
    jobType: "full Time",
    position: 10,
  },
  {
    id: 1,
    title: "t1",
    skill: "react",
    salary: 5000,
    jobType: "part Time",
    position: 6,
  },
];

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_JOB":
      state = [...state, action.payload];
      console.log("Add State::::",state)
      break;
    case "SELECT_JOB":
      const selectstate = state.map((job) =>
        job === action.payload ? null : job
      );
      console.log(selectstate)
      state = selectstate;
      return state;
      break;
    case "UPDATE_JOB":
      const updatestate = state.map((job) =>
        job.id === action.payload.id ? action.payload : job
      );
      console.log("Update State::::",updatestate)
      state = updatestate;
      return state;
      break;
    case "DELETE_JOB":
      const jobFilter = state.filter((job) =>
        job.id === action.payload ? null : job
      );
      state = jobFilter;
      return state;
      break;
    default:
      return state;
  }
};

export default jobReducer;
