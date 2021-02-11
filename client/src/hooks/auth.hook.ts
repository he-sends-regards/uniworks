import { ActionType } from './../store/actions';
import { useState, useCallback, useEffect } from 'react';
import store from '../store/store';

const storageName = 'userData';

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  const login = useCallback((jwtToken, id, name, mail) => {
    setToken(jwtToken);
    setUserId(id);

    localStorage.setItem(storageName, JSON.stringify({
      userId: id, token: jwtToken, userName: name, userMail: mail
    }))
  }, [])
  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);

    localStorage.removeItem(storageName)
  }, [])

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem(storageName) || '{}');

    if (storageData.length === 0 && storageData.token) {
      login(storageData.token, storageData.userId, storageData.userName, storageData.userMail)
      store.dispatch({ type: ActionType.SWITCH_AUTH_STATUS })
      store.dispatch({ type: ActionType.REGISTER_USER, payload: storageData })
    }
  }, [login])

  return {login, logout, token, userId}
};
