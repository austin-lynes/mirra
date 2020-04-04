import { combineReducers } from "redux";
import { Auth } from './reducers/auth';
import { App } from "./reducers/app";

const rootReducer = combineReducers({ auth: Auth, app: App })

export default rootReducer;