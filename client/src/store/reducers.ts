import { IStoreActions } from './../types';
import { ActionType } from './actions';
import { AuthorizationStatus } from './../const';

export const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH
};

export const reducer = (state = initialState, action: IStoreActions) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });
    
    case ActionType.SWITCH_AUTH_STATUS:
      return Object.assign({}, state, {
        authorizationStatus: state.authorizationStatus === AuthorizationStatus.AUTH
          ? AuthorizationStatus.NO_AUTH
          : AuthorizationStatus.AUTH,
      });
  }

  return state;
};
