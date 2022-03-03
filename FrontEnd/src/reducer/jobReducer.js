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
      case "UPDATE_JOB":
        const updatestate = state.map((job) =>
          job.id === action.payload.id ? action.payload : job
        );
        state = updatestate;
        return state;
      case "DELETE_JOB":
        const jobFilter = state.filter((job) =>
          job.id === action.payload ? null : job
        );
        state = jobFilter;
        return state;
      default:
        return state;
    }
  };
  
  export default jobReducer;
  
  