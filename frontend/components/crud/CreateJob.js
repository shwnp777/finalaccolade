import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';

import {
	Col,
	Button,
	Card,
	CardBody,
	CardTitle,
	CardHeader,
	Row,
	Form,
	FormGroup,
	Label,
	Input,
	FormText
} from 'reactstrap';

import { getCookie, isAuth } from '../../actions/auth';
import { getCategories } from '../../actions/category';
import { getTags } from '../../actions/tag';
import { createJob } from '../../actions/job';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import { QuillModules, QuillFormats } from '../../helpers/quill';
import '../../node_modules/react-quill/dist/quill.snow.css';

const CreateJob = ({ router }) => {
	const jobFromLS = () => {
		if (typeof window === 'undefined') {
			return false;
		}

		if (localStorage.getItem('job')) {
			return JSON.parse(localStorage.getItem('job'));
		} else {
			return false;
		}
	};

	const [categories, setCategories] = useState([]);
	const [tags, setTags] = useState([]);

	const [checked, setChecked] = useState([]); // categories
	const [checkedTag, setCheckedTag] = useState([]); // tags

	const [body, setBody] = useState(jobFromLS());
	const [values, setValues] = useState({
		error: '',
		sizeError: '',
		success: '',
		formData: '',
		title: '',
		hidePublishButton: false
	});

	const {
		error,
		sizeError,
		success,
		formData,
		title,
		hidePublishButton
	} = values;
	const token = getCookie('token');

	useEffect(() => {
		setValues({ ...values, formData: new FormData() });
		initCategories();
		initTags();
	}, [router]);

	const initCategories = () => {
		getCategories().then(data => {
			if (data.error) {
				setValues({ ...values, error: data.error });
			} else {
				setCategories(data);
			}
		});
	};

	const initTags = () => {
		getTags().then(data => {
			if (data.error) {
				setValues({ ...values, error: data.error });
			} else {
				setTags(data);
			}
		});
	};

	const publishJob = e => {
		e.preventDefault();
		// console.log('ready to publishJob');
		createJob(formData, token).then(data => {
			if (data.error) {
				setValues({ ...values, error: data.error });
			} else {
				setValues({
					...values,
					title: '',
					error: '',
					success: `A new job titled "${data.title}" was created`
				});
				setBody('');
				setCategories([]);
				setTags([]);
			}
		});
	};

	const handleChange = name => e => {
		// console.log(e.target.value);
		const value = name === 'photo' ? e.target.files[0] : e.target.value;
		formData.set(name, value);
		setValues({ ...values, [name]: value, formData, error: '' });
	};

	const handleBody = e => {
		console.log(e);
		setBody(e);
		formData.set('body', e);
		if (typeof window !== 'undefined') {
			localStorage.setItem('job', JSON.stringify(e));
		}
	};

	const handleToggle = c => () => {
		setValues({ ...values, error: '' });
		// return the first index or -1
		const clickedCategory = checked.indexOf(c);
		const all = [...checked];

		if (clickedCategory === -1) {
			all.push(c);
		} else {
			all.splice(clickedCategory, 1);
		}
		console.log(all);
		setChecked(all);
		formData.set('categories', all);
	};

	const handleTagsToggle = t => () => {
		setValues({ ...values, error: '' });
		// return the first index or -1
		const clickedTag = checked.indexOf(t);
		const all = [...checkedTag];

		if (clickedTag === -1) {
			all.push(t);
		} else {
			all.splice(clickedTag, 1);
		}
		console.log(all);
		setCheckedTag(all);
		formData.set('tags', all);
	};

	const showCategories = () => {
		return (
			categories &&
			categories.map((c, i) => (
				<li key={i} className='list-unstyled'>
					<input
						onChange={handleToggle(c._id)}
						type='checkbox'
						className='mr-2'
					/>
					<label className='form-check-label'>{c.name}</label>
				</li>
			))
		);
	};

	const showTags = () => {
		return (
			tags &&
			tags.map((t, i) => (
				<li key={i} className='list-unstyled'>
					<input
						onChange={handleTagsToggle(t._id)}
						type='checkbox'
						className='mr-2'
					/>
					<label className='form-check-label'>{t.name}</label>
				</li>
			))
		);
	};

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
			{success}
		</div>
	);

	const createJobForm = () => {
		return (
			<Card className='card-user'>
				<CardHeader>
					<CardTitle tag='h5'>Create Job Listing</CardTitle>
				</CardHeader>
				<CardBody className='jobCard'>
					<div className='errorSuccessMessage'>
						{showError()}
						{showSuccess()}
					</div>
					<Form onSubmit={publishJob}>
						<Row>
							<Col className='' md='12'>
								<FormGroup>
									<label className='text-muted'>Job Title</label>
									<Input
										placeholder='Enter a title here'
										type='text'
										className='form-control'
										value={title}
										onChange={handleChange('title')}
									/>
								</FormGroup>
							</Col>
							<Col className='' md='12'>
								<FormGroup>
									<label className='text-muted'>Description</label>
									<ReactQuill
										modules={QuillModules}
										formats={QuillFormats}
										value={body}
										placeholder='Create your next job...'
										onChange={handleBody}
									/>
								</FormGroup>
							</Col>
						</Row>
						<FormGroup check row>
							<Col md='6'>
								<Button color='primary'>Submit</Button>
							</Col>
						</FormGroup>
					</Form>
				</CardBody>
			</Card>
		);
	};

	return (
		<div>
			<Row>
				<div className='col-md-8'>{createJobForm()}</div>

				<div className='col-md-4'>
					<Card className='cat-card'>
						<CardTitle className='jobCatCard'>
							<h5>Categories</h5>
						</CardTitle>
						<CardBody>
							<ul style={{ maxHeight: '200px', overflowY: 'scroll' }}>
								{showCategories()}
							</ul>
						</CardBody>
						<CardTitle className='jobCatCard'>
							<h5>Tags</h5>
						</CardTitle>

						<CardBody>
							<ul style={{ maxHeight: '200px', overflowY: 'scroll' }}>
								{showTags()}
							</ul>
						</CardBody>
					</Card>
				</div>
				{/* {JSON.stringify(title)}
				{JSON.stringify(body)} */}
				{/* {JSON.stringify(categories)}
				{JSON.stringify(tags)} */}
			</Row>
		</div>
	);
};

export default withRouter(CreateJob);
