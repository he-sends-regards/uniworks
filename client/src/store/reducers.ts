import { IStoreActions } from './../types';
import { ActionType } from './actions';
import { AuthorizationStatus } from './../const';

interface IStoreInitialState {
  authorizationStatus: string,
  currentUser: object,
  filterData: object
}

export const initialState: IStoreInitialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  currentUser: {},
  filterData: {}
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
  
    case ActionType.REGISTER_USER:
      return Object.assign({}, state, {
        currentUser: action.payload
      });

    case ActionType.LOGOUT:
      return Object.assign({}, state, {
        currentUser: {},
        authorizationStatus: AuthorizationStatus.NO_AUTH
      });

    case ActionType.SET_FILTERS:
      return Object.assign({}, state, {
        filterData: action.payload
      });
  }

  return state;
};
