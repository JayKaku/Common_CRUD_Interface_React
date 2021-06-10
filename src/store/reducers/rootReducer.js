import { combineReducers } from "redux";
import authReducer from "./authReducer";
import rolesReducer from "./rolesReducer";
const rootReducer = combineReducers({
  auth: authReducer,
  roles: rolesReducer,
});

export default rootReducer;
