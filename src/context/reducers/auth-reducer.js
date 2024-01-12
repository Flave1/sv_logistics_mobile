import {GenerateUUID} from '../../../vendor/utility';
import {LOGIN_ACTION, LOGIN_OUT_ACTION, OFFBOARD_ACTION, ONBOARD_ACTION, SET_AUTHENTICATED} from '../actions/auth-actions';

const initialState = {
  user: null,
  onboard: 'NOT_BOARDED',
  sessionId: '',
  isAuthenticated: false,
};

export const authReducer = (state = initialState, action) => {
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
      sessionId: !state.sessionId ? GenerateUUID() : state.sessionId,
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
  if (action.type == SET_AUTHENTICATED) {
    return {
      ...state,
      isAuthenticated: action.payload,
    };
  }
  return state;
};
