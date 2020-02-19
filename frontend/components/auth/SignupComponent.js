import { useState, useEffect } from 'react';
import { signup, isAuth } from '../../actions/auth';
import Router from 'next/router';

const SignupComponent = () => {
	const [values, setValues] = useState({
		firstName: 'Shawn-Patrick',
		lastName: 'Bland',
		jobTitle: 'HR Rep',
		email: 'bland@gmail.com',
		password: 'rrrrrr',
		error: '',
		loading: false,
		message: '',
		showForm: true
	});

	const {
		firstName,
		lastName,
		jobTitle,
		email,
		password,
		error,
		loading,
		message,
		showForm
	} = values;

	useEffect(() => {
		if (!isAuth()) {
			Router.push(`/`);
		} else if (isAuth().role !== 1) {
			Router.push(`/`);
		}
	}, []);

	const handleSubmit = e => {
		e.preventDefault();
		// console.table({
		// 	firstName,
		// 	lastName,
		// 	jobTitle,
		// 	email,
		// 	password,
		// 	error,
		// 	loading,
		// 	message,
		// 	showForm
		// });
		setValues({ ...values, loading: true, error: false });
		const user = { firstName, lastName, jobTitle, email, password };

		signup(user).then(data => {
			if (data.error) {
				setValues({ ...values, error: data.error, loading: false });
			} else {
				setValues({
					...values,
					firstName: '',
					lastName: '',
					jobTitle: '',
					email: '',
					password: '',
					error: '',
					loading: false,
					message: data.message,
					showForm: false
				});
			}
		});
	};

	const handleChange = name => e => {
		setValues({ ...values, error: false, [name]: e.target.value });
	};

	const showLoading = () =>
		loading ? <div className='alert alert-info'>Loading...</div> : '';
	const showError = () =>
		error ? <div className='alert alert-danger'>{error}</div> : '';
	const showMessage = () =>
		message ? <div className='alert alert-info'>{message}</div> : '';

	const signupForm = () => {
		return (
			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<input
						value={firstName}
						onChange={handleChange('firstName')}
						type='text'
						className='form-control'
						placeholder='First Name'
					/>
				</div>
				<div className='form-group'>
					<input
						value={lastName}
						onChange={handleChange('lastName')}
						type='text'
						className='form-control'
						placeholder='Last Name'
					/>
				</div>
				<div className='form-group'>
					<input
						value={jobTitle}
						onChange={handleChange('jobTitle')}
						type='text'
						className='form-control'
						placeholder='Job Title'
					/>
				</div>

				<div className='form-group'>
					<input
						value={email}
						onChange={handleChange('email')}
						type='email'
						className='form-control'
						placeholder='Must be a vaild Accolade email'
					/>
				</div>

				<div className='form-group'>
					<input
						value={password}
						onChange={handleChange('password')}
						type='password'
						className='form-control'
						placeholder='Choose a password'
					/>
				</div>

				<div>
					<button className='btn btn-primary'>Signup</button>
				</div>
			</form>
		);
	};

	return (
		<React.Fragment>
			{showError()}
			{showLoading()}
			{showMessage()}
			{showForm && signupForm()}
		</React.Fragment>
	);
};

export default SignupComponent;
