import {applyMiddleware, combineReducers, createStore} from "redux";
import {productReducer} from "./reducers/productReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {cartReducer} from "./reducers/cartReducer";
import {currencyReducer} from "./reducers/currencyReducer";


const initialState = {};

const store = createStore(combineReducers({
    products: productReducer,
    cart: cartReducer,
    currency: currencyReducer,
  }),
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store;
