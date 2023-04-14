import { DATA_FAILURE, DATA_REQUEST, DATA_SUCCESS } from "./actionTypes";

const init = {
  highlights: [],
  isloading: false,
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case DATA_REQUEST: {
      return {
        ...state,
        isloading: true,
      };
    }
    case DATA_SUCCESS: {
      return {
        ...state,
        highlights: payload,
        isloading: false,
      };
    }
    case DATA_FAILURE: {
      return {
        ...state,
        isloading: false,
      };
    }
    default:
      return state;
  }
};
