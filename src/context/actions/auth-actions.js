import {
  clearUserToken,
  getUserContext,
  signin,
  storeUserToken,
} from '../service';

export const LOGIN_ACTION = '[LOGIN_ACTION] Log in user';
export const LOGIN_OUT_ACTION = '[LOGIN_OUT_ACTION] Log in user';
export const REGISTER_USER = '[REGISTER_USER_ACTION] Register in user';
export const ONBOARD_ACTION = '[ONBOARD_ACTION] Onboard user';
export const OFFBOARD_ACTION = '[OFFBOARD_ACTION] Remove boarded user';

export const LoginAction = (email: any, password: any) => {
  return (dispatch: any) =>
    signin(email, password)
      .then(response => {
        storeUserToken(response.data.access_token).then(() => {
          getUserContext().then(context => {
            dispatch({
              type: LOGIN_ACTION,
              payload: context.data,
            });
          });
        });
      })
      .catch(error => {
        const errorMessage = error.response.data.message;
        console.log('errorMessage', errorMessage);
      });
};

export const LoginUserOutAction = () => {
  return (dispatch: any) =>
    clearUserToken()
      .then(() => {
        dispatch({
          type: LOGIN_OUT_ACTION
        });
      })
      .catch(error => {
        const errorMessage = error.response.data.message;
        console.log('errorMessage', errorMessage);
      });
};

export const onBoardUser = () => {
  return (dispatch: any) =>
    dispatch({
      type: ONBOARD_ACTION,
      payload: 'ONBOARDED',
    });
};

export const removeBoardedUser = () => {
  return (dispatch: any) =>
    dispatch({
      type: OFFBOARD_ACTION,
      payload: 'NOT_BOARDED',
    });
};
