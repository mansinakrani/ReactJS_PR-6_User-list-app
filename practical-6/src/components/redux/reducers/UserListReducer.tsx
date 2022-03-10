import { ActionTypes } from "../constants/action-types";

const initialState = {
 users: [
    {
      id: 0,
      avatar: "",
      first_name: "", 
      last_name: "",
      email: "", 
      status: "",
      access: "",
      icon: "",
    },
  ],
};

const userReducer = (state = initialState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case ActionTypes.LIST_USERS:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
