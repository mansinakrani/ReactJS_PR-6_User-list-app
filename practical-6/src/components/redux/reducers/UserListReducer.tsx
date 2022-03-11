import { ActionTypes } from "../constants/action-types";

const initialState = {
  users: [],
  pageNumber: 0,
};

const userReducer = (state = initialState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case ActionTypes.LIST_USERS:
      return {
        ...state,
        users: action.payload,
      };
      case ActionTypes.PAGE:
        return {
          ...state,
          pageNumber: state.pageNumber + 1,
        };
    default:
      return state;
  }
};

export default userReducer;
