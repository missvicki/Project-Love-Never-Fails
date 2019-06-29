import * as types from "../../constants/index";

const initialState = {};

const testReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.TEST_THIS_ACTION:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default testReducer;
