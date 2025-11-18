import axios from 'axios';

export default function (path = '', options = {}) {
	return axios.create({
		baseURL: import.meta.env.PUBLIC_API_ORIGIN + path,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		withCredentials: true,
		withXSRFToken: true,
		...options,
	});
}
