import {
  getAllBlogsReducer,
  getBlogByIdReducer,
  deleteBlogReducer,
  addBlogReducer,
  updateBlogReducer,
} from "./reducers/blogReducer";

import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  loginReducer,
  registerNewUserReducer,
  updateReducer,
  getAllUsersReducer,
  deleteUserReducer,
} from "./reducers/userReducer";

const finalReducer = combineReducers({
  getAllBlogsReducer: getAllBlogsReducer,
  getBlogByIdReducer: getBlogByIdReducer,
  deleteBlogReducer: deleteBlogReducer,
  addBlogReducer: addBlogReducer,
  updateBlogReducer: updateBlogReducer,

  loginReducer: loginReducer,
  registerNewUserReducer: registerNewUserReducer,
  updateReducer: updateReducer,
  getAllUsersReducer: getAllUsersReducer,
  deleteUserReducer: deleteUserReducer,
});

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const initialState = {
  loginReducer: { currentUser: currentUser },
};

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});
const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);

export default store;
