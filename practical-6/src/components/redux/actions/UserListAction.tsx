import { ActionTypes } from "../constants/action-types";


export const listUsers = (users: string | []) => {
  return {
    type: ActionTypes.LIST_USERS,
    payload: { users },
  };
};
