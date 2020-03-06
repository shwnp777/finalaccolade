import fetch from 'isomorphic-fetch';
import { API } from '../config';
import queryString from 'query-string';
import { isAuth, handleResponse } from './auth';

export const createJob = (job, token) => {
	let createJobEndpoint;

	if (isAuth() && isAuth().role === 1) {
		createJobEndpoint = `${API}/job`;
	} else if (isAuth() && isAuth().role === 0) {
		createJobEndpoint = `${API}/user/job`;
	}

	return fetch(`${createJobEndpoint}`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			Authorization: `Bearer ${token}`
		},
		body: job
	})
		.then(response => {
			handleResponse(response);
			return response.json();
		})
		.catch(err => console.log(err));
};

export const listJobsWithCategoriesAndTags = (skip, limit) => {
	const data = {
		limit,
		skip
	};
	return fetch(`${API}/jobs-categories-tags`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
		.then(response => {
			return response.json();
		})
		.catch(err => console.log(err));
};

export const singleJob = (slug = undefined) => {
	return fetch(`${API}/job/${slug}`, {
		method: 'GET'
	})
		.then(response => {
			return response.json();
		})
		.catch(err => console.log(err));
};

export const listRelated = job => {
	return fetch(`${API}/jobs/related`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(job)
	})
		.then(response => {
			return response.json();
		})
		.catch(err => console.log(err));
};

export const list = username => {
	let listJobsEndpoint;

	if (username) {
		listJobsEndpoint = `${API}/${username}/jobs`;
	} else {
		listJobsEndpoint = `${API}/jobs`;
	}

	return fetch(`${listJobsEndpoint}`, {
		method: 'GET'
	})
		.then(response => {
			return response.json();
		})
		.catch(err => console.log(err));
};

export const removeJob = (slug, token) => {
	let deleteJobEndpoint;

	if (isAuth() && isAuth().role === 1) {
		deleteJobEndpoint = `${API}/job/${slug}`;
	} else if (isAuth() && isAuth().role === 0) {
		deleteJobEndpoint = `${API}/user/job/${slug}`;
	}

	return fetch(`${deleteJobEndpoint}`, {
		method: 'DELETE',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`
		}
	})
		.then(response => {
			handleResponse(response);
			return response.json();
		})
		.catch(err => console.log(err));
};

export const updateJob = (job, token, slug) => {
	let updateJobEndpoint;

	if (isAuth() && isAuth().role === 1) {
		updateJobEndpoint = `${API}/job/${slug}`;
	} else if (isAuth() && isAuth().role === 0) {
		updateJobEndpoint = `${API}/user/job/${slug}`;
	}

	return fetch(`${updateJobEndpoint}`, {
		method: 'PUT',
		headers: {
			Accept: 'application/json',
			Authorization: `Bearer ${token}`
		},
		body: job
	})
		.then(response => {
			handleResponse(response);
			return response.json();
		})
		.catch(err => console.log(err));
};

// export const listSearch = params => {
// 	console.log('search params', params);
// 	let query = queryString.stringify(params);
// 	console.log('query params', query);
// 	return fetch(`${API}/jobs/search?${query}`, {
// 		method: 'GET'
// 	})
// 		.then(response => {
// 			return response.json();
// 		})
// 		.catch(err => console.log(err));
// };
