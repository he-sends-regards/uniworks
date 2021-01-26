export const ActionType = {
  REQUIRED_AUTHORIZATION: 'REQUIRED_AUTHORIZATION',
  SWITCH_AUTH_STATUS: 'SWITCH_AUTH_STATUS',
  REGISTER_USER: 'REGISTER_USER',
  LOGOUT: 'LOGOUT'
};

export const requireAuthorization = (status: string) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status
});

export const switchAuthStatus = () => ({
  type: ActionType.SWITCH_AUTH_STATUS
});

interface IUserData {
  [key: string]: string
}

export const registerUser = (userData: IUserData) => ({
  type: ActionType.REGISTER_USER,
  payload: userData
})

export const logout = () => ({
  type: ActionType.LOGOUT
})
