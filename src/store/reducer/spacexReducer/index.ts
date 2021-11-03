import { SET_SPACEX } from "../../action/spacexAction";

const initialState = {
  spacexData: [],
};

const spacexReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_SPACEX: {
      return { ...state, spacexData: action.data };
    }
    default:
      return state;
  }
};

export default spacexReducer;
