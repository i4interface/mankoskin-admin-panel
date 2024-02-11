import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeConfigSlice from "./themeConfigSlice";
import adminReducer from "./adminSlice";

const rootReducer = combineReducers({
  themeConfig: themeConfigSlice,
  admin: adminReducer // Use adminReducer here
});

export default configureStore({
  reducer: rootReducer
});