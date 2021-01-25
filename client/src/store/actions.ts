export const ActionType = {
  REQUIRED_AUTHORIZATION: 'REQUIRED_AUTHORIZATION',
  SWITCH_AUTH_STATUS: 'SWITCH_AUTH_STATUS'
};

export const requireAuthorization = (status: string) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status
});

export const switchAuthStatus = () => ({
  type: ActionType.SWITCH_AUTH_STATUS
})