export const ActionType = {
  REQUIRED_AUTHORIZATION: 'REQUIRED_AUTHORIZATION'
};

export const requireAuthorization = (status: string) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status
});