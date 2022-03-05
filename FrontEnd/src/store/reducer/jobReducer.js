let initialOfferList = {
  alljob: {},
  jobByid: {},
  editjob: {},
  deletejob: {},
};
const jobReducer = (state = initialOfferList, action) => {
  switch (action.type) {
    case "ADD_JOB":
      state = [...state, action.payload];
      console.log("Add State::::", state);
      break;
    case "GET_ALL_JOBS": {
      return {
        ...state,
        alljob: action.payload,
      };
    }
    case "GET_JOBS_BY_ID": {
      return {
        ...state,
        jobByid: action.payload,
      };
    }
    case "UPDATE_JOB": {
      return {
        ...state,
        editjob: action.payload,
      };
    }
    case "DELETE_JOB": {
      return {
        ...state,
        deletejob: action.payload,
      };
    }
    default: {
      return state;
    }

    //   const jobFilter = state.filter((job) =>
    //     job.id === action.payload ? null : job
    //   );
    //   state = jobFilter;
    //   return state;
    //   break;

    // case "GET_ALL_OFFER_ERROR": {
    // return {
    // ...state,
    // getAllOfferError: action.payload,
    // };
    // }
    // case "GET_PUBLISHED_OFFER": {
    // return {
    // ...state,
    // publishesdOffer: action.payload,
    // };
    // }
    // case "GET_DRAFT_OFFER": {
    // return {
    // ...state,
    // draftOffer: action.payload,
    // };
    // }
    // case "GET_OFFER_BY_ID": {
    // return {
    // ...state,
    // getOfferById: action.payload,
    // };
    // }
    // case "GET_PRODUCT_LIST": {
    // return {
    // ...state,
    // productList: action.payload,
    // };
    // }
    // case "GET_PRODUCT_CHIP_LIST": {
    // return {
    // ...state,
    // productChipList: action.payload,
    // };
    // }
    // case "ADD_PRODUCT_CHIP_LIST": {
    // return {
    // ...state,
    // addProduct: action.payload,
    // };
    // }
    // case "DELETE_PRODUCT_CHIP_LIST": {
    // return {
    // ...state,
    // removeProduct: action.payload,
    // };
    // }
    // case "EDIT_OFFER_DETAILS": {
    // return {
    // ...state,
    // editOfferD: action.payload,
    // };
    // }
    // case "EDIT_OFFER": {
    // return {
    // ...state,
    // editoffer: action.payload,
    // };
    // }
    // case "OFFER_STATUS": {
    // return {
    // ...state,
    // offerStatus: action.payload,
    // };
    // }
    // case "CREATE_OFFER": {
    // return {
    // ...state,
    // createOffer: action.payload,
    // };
    // }
    // case "DELETE_OFFER": {
    // return {
    // ...state,
    // removeOffer: action.payload,
    // };
    // }
  }
};

export default jobReducer;
