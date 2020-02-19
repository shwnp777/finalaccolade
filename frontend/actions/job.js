import fetch from 'isomorphic-fetch';
import { API } from '../config';

export const createJob = (job, token) => {
	return fetch(`${API}/job`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			Authorization: `Bearer ${token}`
		},
		body: job
	})
		.then(response => {
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

export const singleJob = slug => {
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

export const list = () => {
	return fetch(`${API}/jobs`, {
		method: 'GET'
	})
		.then(response => {
			return response.json();
		})
		.catch(err => console.log(err));
};

export const removeJob = (slug, token) => {
	return fetch(`${API}/job/${slug}`, {
		method: 'DELETE',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`
		}
	})
		.then(response => {
			return response.json();
		})
		.catch(err => console.log(err));
};

export const updateJob = (job, token, slug) => {
	return fetch(`${API}/job/${slug}`, {
		method: 'PUT',
		headers: {
			Accept: 'application/json',
			Authorization: `Bearer ${token}`
		},
		body: job
	})
		.then(response => {
			return response.json();
		})
		.catch(err => console.log(err));
};
