import isEmpty from "../validation/is-empty";

import {
  SET_CURRENT_USER,
  IS_RECOVER_EMAIL,
  GET_PROFILE
} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {},
  recoverPass: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        recoverPass: !isEmpty(action.payload)
      };
    case IS_RECOVER_EMAIL:
      return {
        ...state,
        recoverPass: !isEmpty(action.payload)
      };
    case GET_PROFILE:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
