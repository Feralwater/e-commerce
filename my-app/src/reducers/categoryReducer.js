import {CHANGE_CATEGORY} from "../types";

export const categoryReducer = (state = {category: "all"}, action) => {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return {
        category: action.payload.category,
      };
    default:
      return state;
  }
}
