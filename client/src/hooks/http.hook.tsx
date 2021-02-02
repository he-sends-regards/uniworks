import { useCallback, useState } from 'react';

interface IUseHttpReturn {
	method: string;
	body: any;
	headers: object;
}

export const useHttp = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const request = useCallback(
		async (url: string, method: string = 'GET', body: any = null, headers: any = {}): Promise<any> => {
			setLoading(true);

			try {
				const response = await fetch(url, { method, body, headers });
				const data = await response.json();

				if (!response.ok) {
					throw new Error(data.message || 'При запросе что-то пошло не так');
				}

				setLoading(false);

				return data;
			} catch (err) {
				setLoading(false);
				setError(err.message);
				throw err;
			}
		},
		[]
	);

	const clearError = () => setError(null);

	return {
		loading,
		request,
		clearError,
		error
	};
};
