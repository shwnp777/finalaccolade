import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import { getCookie, isAuth } from '../../actions/auth';
import { list, removeJob } from '../../actions/job';
import moment from 'moment';
import { Card, CardTitle, CardHeader, CardFooter } from 'reactstrap';

const JobRead = () => {
	const [jobs, setJobs] = useState([]);
	const [message, setMessage] = useState('');
	const token = getCookie('token');

	useEffect(() => {
		loadJobs();
	}, []);

	const loadJobs = () => {
		list().then(data => {
			if (data.error) {
				console.log(data.error);
			} else {
				setJobs(data);
			}
		});
	};

	const deleteJob = slug => {
		removeJob(slug, token).then(data => {
			if (data.error) {
				console.log(data.error);
			} else {
				setMessage(data.message);
				loadJobs();
			}
		});
	};

	const deleteConfirm = slug => {
		let answer = window.confirm('Are you sure you want to delete your job?');
		if (answer) {
			deleteJob(slug);
		}
	};

	const showUpdateButton = job => {
		if (isAuth() && isAuth().role === 0) {
			return (
				<Link href={`/user/crud/${job.slug}`}>
					<a className='btn btn-sm btn-warning'>Update</a>
				</Link>
			);
		} else if (isAuth() && isAuth().role === 1) {
			return (
				<Link href={`/admin/crud/${job.slug}`}>
					<a className='ml-2 btn btn-sm btn-warning'>Update</a>
				</Link>
			);
		}
	};

	const showAllJobs = () => {
		return jobs.map((job, i) => {
			return (
				<div key={i} className='pb-2'>
					<Card>
						<CardHeader>
							<CardTitle>
								<h3>{job.title}</h3>
							</CardTitle>
							<p>
								Posted by {job.postedBy.firstName}, {job.postedBy.jobTitle} |
								Published on {moment(job.updatedAt).fromNow()}
							</p>
						</CardHeader>
						<CardFooter>
							<button
								className='btn btn-sm btn-danger'
								onClick={() => deleteConfirm(job.slug)}
							>
								Delete
							</button>
							{showUpdateButton(job)}
						</CardFooter>
					</Card>
				</div>
			);
		});
	};

	return (
		<React.Fragment>
			<div className='row'>
				<div className='col-md-12'>
					{message && <div className='alert alert-info'>{message}</div>}
					{showAllJobs()}
				</div>
			</div>
		</React.Fragment>
	);
};

export default JobRead;
