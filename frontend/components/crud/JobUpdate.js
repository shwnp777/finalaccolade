import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import { getCookie, isAuth } from '../../actions/auth';
import { getCategories } from '../../actions/category';
import { getTags } from '../../actions/tag';
import { singleJob, updateJob } from '../../actions/job';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import '../../node_modules/react-quill/dist/quill.snow.css';
import { QuillModules, QuillFormats } from '../../helpers/quill';
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
import { API } from '../../config';

const JobUpdate = ({ router }) => {
	const [body, setBody] = useState('');

	const [categories, setCategories] = useState([]);
	const [tags, setTags] = useState([]);

	const [checked, setChecked] = useState([]); // categories
	const [checkedTag, setCheckedTag] = useState([]); // tags

	const [values, setValues] = useState({
		title: '',
		error: '',
		success: '',
		formData: '',
		title: '',
		body: ''
	});

	const { error, success, formData, title } = values;
	const token = getCookie('token');

	useEffect(() => {
		setValues({ ...values, formData: new FormData() });
		initJob();
		initCategories();
		initTags();
	}, [router]);

	const initJob = () => {
		if (router.query.slug) {
			singleJob(router.query.slug).then(data => {
				if (data.error) {
					console.log(data.error);
				} else {
					setValues({ ...values, title: data.title });
					setBody(data.body);
					setCategoriesArray(data.categories);
					setTagsArray(data.tags);
				}
			});
		}
	};

	const setCategoriesArray = jobCategories => {
		let ca = [];
		jobCategories.map((c, i) => {
			ca.push(c._id);
		});
		setChecked(ca);
	};

	const setTagsArray = jobTags => {
		let ta = [];
		jobTags.map((t, i) => {
			ta.push(t._id);
		});
		setCheckedTag(ta);
	};

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
		const clickedTag = checkedTag.indexOf(t);
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

	const findOutCategory = c => {
		const result = checked.indexOf(c);
		if (result !== -1) {
			return true;
		} else {
			return false;
		}
	};

	const findOutTag = t => {
		const result = checkedTag.indexOf(t);
		if (result !== -1) {
			return true;
		} else {
			return false;
		}
	};

	const showCategories = () => {
		return (
			categories &&
			categories.map((c, i) => (
				<li key={i} className='list-unstyled'>
					<input
						onChange={handleToggle(c._id)}
						checked={findOutCategory(c._id)}
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
						checked={findOutTag(t._id)}
						type='checkbox'
						className='mr-2'
					/>
					<label className='form-check-label'>{t.name}</label>
				</li>
			))
		);
	};

	const handleChange = name => e => {
		// console.log(e.target.value);
		const value = name === 'photo' ? e.target.files[0] : e.target.value;
		formData.set(name, value);
		setValues({ ...values, [name]: value, formData, error: '' });
	};

	const handleBody = e => {
		setBody(e);
		formData.set('body', e);
	};

	const editJob = e => {
		e.preventDefault();
		updateJob(formData, token, router.query.slug).then(data => {
			if (data.error) {
				setValues({ ...values, error: data.error });
			} else {
				setValues({
					...values,
					title: '',
					success: `Job titled "${data.title}" is successfully updated`
				});
				if (isAuth() && isAuth().role === 1) {
					// Router.replace(`/admin/crud/${router.query.slug}`);
					Router.replace(`/admin`);
				} else if (isAuth() && isAuth().role === 0) {
					// Router.replace(`/user/crud/${router.query.slug}`);
					Router.replace(`/user`);
				}
			}
		});
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

	const updateJobForm = () => {
		return (
			<Card className='card-user'>
				<CardHeader>
					<CardTitle tag='h5'>Edit Job Listing</CardTitle>
				</CardHeader>
				<CardBody className='jobCard'>
					<div className='errorSuccessMessage'>
						{showError()}
						{showSuccess()}
					</div>
					<Form onSubmit={editJob}>
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
								<Button color='primary'>Update</Button>
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
				<div className='col-md-8'>{updateJobForm()}</div>

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
			</Row>
		</div>
	);
};

export default withRouter(JobUpdate);
