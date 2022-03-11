import { ActionTypes } from "../constants/action-types";


export const listUsers = (users: string | [] | number) => {
  return {
    type: ActionTypes.LIST_USERS,
    payload: users,
  };
};

export const page = (pageNumber: number) => {
  return {
    type: ActionTypes.PAGE,
    payload: pageNumber,
  };
};
