import { combineReducers } from "redux";
import userReducer from "./UserListReducer";

const rootReducer = combineReducers({
  allUsers: userReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>

/*
Proper solution will require following two steps:

Create RootState type in Root Reducer.
export const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  user: userReducer
});

export type RootState = ReturnType<typeof rootReducer>
Provide RootState type to state object.
  let userData = useSelector((state: RootState) => {
    return state.user.data;
  });
*/