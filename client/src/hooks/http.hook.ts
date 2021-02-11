import { ActionType } from './../store/actions';
import { useCallback, useState } from 'react';
import store from '../store/store';

export const useHttp = () => {
	const [loading, setLoading] = useState(false);
	const [serverError, setServerError] = useState(null);

	const request = useCallback(
		async (url: string, method: string = 'GET', body: any = null, headers: any = {}): Promise<any> => {
			setLoading(true);

			try {
				if (body) {
					body = JSON.stringify(body);
          headers['Content-Type'] = 'application/json';
				}

				const response = await fetch(url, { method, body, headers });
				const data = await response.json();

				if (!response.ok) {
					throw new Error(data.message || 'При запросе что-то пошло не так');
				}

				setLoading(false);

				return data;
			} catch (err) {
				setLoading(false);
				setServerError(err.message);
				throw err;
			}
    },
		[]
	);

	const clearError = useCallback(() => setServerError(null), [])

	return {
		loading,
		request,
		clearError,
		serverError
	};
};
