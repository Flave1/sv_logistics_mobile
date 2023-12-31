import {
  LOGIN_ACTION,
  LOGIN_OUT_ACTION,
  OFFBOARD_ACTION,
  ONBOARD_ACTION,
} from '../actions/auth-actions';

const initialState = {
  user: null,
  onboard: 'NOT_BOARDED',
};

export const authReducer = (state = initialState, action: any) => {
  if (action.type == LOGIN_ACTION) {
    return {
      ...state,
      user: action.payload,
    };
  }
  if (action.type == ONBOARD_ACTION) {
    return {
      ...state,
      onboard: action.payload,
    };
  }
  if (action.type == OFFBOARD_ACTION) {
    return {
      ...state,
      onboard: action.payload,
    };
  }

  if (action.type == LOGIN_OUT_ACTION) {
    return {
      ...state,
      user: null,
    };
  }
  return state;
};
