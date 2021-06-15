import {FETCH_PRODUCTS} from "../types";

export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        items: action.payload.map((item) => ({...item, _id: Math.floor(Math.random() * 10_000) + item.name})),
      }
    default:
      return state;
  }
}
