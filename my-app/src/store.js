import {applyMiddleware, combineReducers, createStore} from "redux";
import {productReducer} from "./reducers/productReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const initialState = {};

const store = createStore(combineReducers({
    products: productReducer,
  }),
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store;
