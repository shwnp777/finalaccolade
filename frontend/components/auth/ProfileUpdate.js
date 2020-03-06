import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import { getCookie, isAuth, updateUser } from '../../actions/auth';
import { getProfile, update } from '../../actions/user';
import { API } from '../../config';

import {
	Button,
	Card,
	CardHeader,
	CardBody,
	CardTitle,
	FormGroup,
	Form,
	Input,
	Row,
	Col
} from 'reactstrap';

const ProfileUpdate = () => {
	const [values, setValues] = useState({
		username: '',
		firstName: '',
		lastName: '',
		jobTitle: '',
		cellPhone: '',
		homePhone: '',
		emergencyName: '',
		emergencyPhone: '',
		userStreet: '',
		suiteNumber: '',
		userCity: '',
		userState: '',
		userZip: '',
		email: '',
		about: '',
		password: '',
		error: false,
		success: false,
		loading: false,
		photo: '',
		userData: ''
	});

	const token = getCookie('token');
	const {
		username,
		firstName,
		lastName,
		jobTitle,
		cellPhone,
		homePhone,
		emergencyName,
		emergencyPhone,
		userStreet,
		suiteNumber,
		userCity,
		userState,
		userZip,
		email,
		about,
		password,
		error,
		success,
		loading,
		photo,
		userData
	} = values;

	const init = () => {
		getProfile(token).then(data => {
			if (data.error) {
				setValues({ ...values, error: data.error });
			} else {
				setValues({
					...values,
					username: data.username,
					firstName: data.firstName,
					lastName: data.lastName,
					jobTitle: data.jobTitle,
					cellPhone: data.cellPhone,
					homePhone: data.homePhone,
					emergencyName: data.emergencyName,
					emergencyPhone: data.emergencyPhone,
					userStreet: data.userStreet,
					suiteNumber: data.suiteNumber,
					userCity: data.userCity,
					userState: data.userState,
					userZip: data.userZip,
					email: data.email,
					about: data.about
				});
			}
		});
	};

	useEffect(() => {
		init();
	}, []);

	const handleChange = name => e => {
		// console.log(e.target.value);
		const value = name === 'photo' ? e.target.files[0] : e.target.value;
		let userFormData = new FormData();
		userFormData.set(name, value);
		setValues({
			...values,
			[name]: value,
			userData: userFormData,
			error: false,
			success: false
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		setValues({ ...values, loading: true });
		update(token, userData).then(data => {
			if (data.error) {
				setValues({
					...values,
					error: data.error,
					success: false,
					loading: false
				});
			} else {
				updateUser(data, () => {
					setValues({
						...values,
						username: data.username,
						firstName: data.firstName,
						lastName: data.lastName,
						jobTitle: data.jobTitle,
						cellPhone: data.cellPhone,
						homePhone: data.homePhone,
						emergencyName: data.emergencyName,
						emergencyPhone: data.emergencyPhone,
						userStreet: data.userStreet,
						suiteNumber: data.suiteNumber,
						userCity: data.userCity,
						userState: data.userState,
						userZip: data.userZip,
						email: data.email,
						about: data.about,
						password: '',
						success: true,
						loading: false
					});
				});
			}
		});
	};

	// -----------------------------------------------  This is the Updated profile update form ----------------------------------------------

	const profileUpdateForm = () => (
		<div className='profileUpdateForm'>
			<Card className='card-user'>
				<CardHeader className='editProfileHeader'>
					<CardTitle tag='h5'>Edit Profile</CardTitle>
				</CardHeader>
				<CardBody>
					<Form onSubmit={handleSubmit}>
						<Row>
							<Col>
								<label className='btn btn-info'>
									Profile photo
									<input
										onChange={handleChange('photo')}
										type='file'
										accept='image/*'
										hidden
									/>
								</label>
							</Col>
						</Row>
						<Row>
							<Col className='pr-1' md='3'>
								<FormGroup>
									<label>Change Password</label>
									<Input
										onChange={handleChange('password')}
										type='password'
										value={password}
										className='form-control'
									/>
								</FormGroup>
							</Col>
							<Col className='px-1' md='4'>
								<FormGroup>
									<label>Username</label>
									<Input
										onChange={handleChange('username')}
										type='text'
										value={username}
										className='form-control'
									/>
								</FormGroup>
							</Col>
							<Col className='pl-1' md='5'>
								<FormGroup>
									<label htmlFor='exampleInputEmail1'>Email address</label>
									<Input
										placeholder='Email'
										onChange={handleChange('email')}
										type='email'
										value={email}
										className='form-control'
									/>
								</FormGroup>
							</Col>
						</Row>
						<Row>
							<Col className='pr-1' md='6'>
								<FormGroup>
									<label>First Name</label>
									<Input
										onChange={handleChange('firstName')}
										type='text'
										value={firstName}
										className='form-control'
									/>
								</FormGroup>
							</Col>
							<Col className='pl-1' md='6'>
								<FormGroup>
									<label>Last Name</label>
									<Input
										onChange={handleChange('lastName')}
										type='text'
										value={lastName}
										className='form-control'
									/>
								</FormGroup>
							</Col>
						</Row>
						<Row>
							<Col className='pr-1' md='6'>
								<FormGroup>
									<label>Cell Phone</label>
									<Input
										onChange={handleChange('cellPhone')}
										type='tel'
										value={cellPhone}
										className='form-control'
									/>
								</FormGroup>
							</Col>
							<Col className='pl-1' md='6'>
								<FormGroup>
									<label>Home Phone</label>
									<Input
										onChange={handleChange('homePhone')}
										type='tel'
										value={homePhone}
										className='form-control'
									/>
								</FormGroup>
							</Col>
						</Row>
						<Row>
							<Col className='pr-1' md='6'>
								<FormGroup>
									<label>Emergency Contact Name</label>
									<Input
										onChange={handleChange('emergencyName')}
										type='text'
										value={emergencyName}
										className='form-control'
									/>
								</FormGroup>
							</Col>
							<Col className='pl-1' md='6'>
								<FormGroup>
									<label>Emergency Contact Phone</label>
									<Input
										onChange={handleChange('emergencyPhone')}
										type='tel'
										value={emergencyPhone}
										className='form-control'
									/>
								</FormGroup>
							</Col>
						</Row>
						<Row>
							<Col className='pr-1' md='10'>
								<FormGroup>
									<label>Street Address</label>
									<Input
										onChange={handleChange('userStreet')}
										type='text'
										value={userStreet}
										className='form-control'
									/>
								</FormGroup>
							</Col>
							<Col className='pl-1' md='2'>
								<FormGroup>
									<label>Suite Number</label>
									<Input
										onChange={handleChange('suiteNumber')}
										type='text'
										value={suiteNumber}
										className='form-control'
									/>
								</FormGroup>
							</Col>
						</Row>
						<Row>
							<Col className='pr-1' md='5'>
								<FormGroup>
									<label>City</label>
									<Input
										onChange={handleChange('userCity')}
										type='text'
										value={userCity}
										className='form-control'
									/>
								</FormGroup>
							</Col>
							<Col className='px-1' md='5'>
								<FormGroup>
									<label>State</label>
									<Input
										onChange={handleChange('userState')}
										type='text'
										value={userState}
										className='form-control'
									/>
								</FormGroup>
							</Col>
							<Col className='pl-1' md='2'>
								<FormGroup>
									<label>ZipCode</label>
									<Input
										onChange={handleChange('userZip')}
										type='text'
										value={userZip}
										className='form-control'
									/>
								</FormGroup>
							</Col>
						</Row>
						<Row>
							<Col md='12'>
								<FormGroup>
									<label>About Me</label>
									<Input
										onChange={handleChange('about')}
										type='textarea'
										value={about}
										className='form-control'
									/>
								</FormGroup>
							</Col>
						</Row>
						<Row>
							<div className='update ml-auto mr-auto'>
								<Button className='btn-round' color='primary' type='submit'>
									Update Profile
								</Button>
							</div>
						</Row>
					</Form>
				</CardBody>
			</Card>
		</div>
	);

	// -----------------------------------------------  This is the Updated profile update form ----------------------------------------------

	const ProfileView = () => (
		<div className='profileViewCard'>
			<Card className='card-user'>
				<div className='image'>
					<img alt='profile' src='/static/images/lights.jpg' />
				</div>
				<CardBody>
					<div className='author'>
						<a href='#pablo' onClick={e => e.preventDefault()}>
							<img
								alt='...'
								className='avatar border-gray'
								src={`${API}/user/photo/${username}`}
							/>
							<h5 className='title'>{firstName}</h5>
						</a>
						<p className='description'>{jobTitle}</p>
					</div>
				</CardBody>
			</Card>
		</div>
	);

	const showError = () => (
		<div
			className='alert alert-danger'
			style={{ display: error ? '' : 'none' }}
		>
			{error}
		</div>
	);

	const showSuccess = () => (
		<div
			className='alert alert-success'
			style={{ display: success ? '' : 'none' }}
		>
			Profile updated
		</div>
	);

	const showLoading = () => (
		<div
			className='alert alert-info'
			style={{ display: loading ? '' : 'none' }}
		>
			Loading...
		</div>
	);

	return (
		<React.Fragment>
			<Col md='3'>{ProfileView()}</Col>

			<Col md='7'>
				{showSuccess()}
				{showError()}
				{showLoading()}
				{profileUpdateForm()}
			</Col>
		</React.Fragment>
	);
};

export default ProfileUpdate;
