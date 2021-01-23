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
  }

  return state;
};
