import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { useState, useEffect } from 'react';
import { singleJob, listRelated } from '../../actions/job';
import { API, DOMAIN, APP_NAME } from '../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
import SmallCard from '../../components/job/SmallCard';
import { Card, CardTitle, CardHeader } from 'reactstrap';

const SingleJob = ({ job, query }) => {
	const [related, setRelated] = useState([]);

	const loadRelated = () => {
		listRelated({ job }).then(data => {
			if (data.error) {
				console.log(data.error);
			} else {
				setRelated(data);
			}
		});
	};

	useEffect(() => {
		loadRelated();
	}, []);

	const head = () => (
		<Head>
			<title>
				{job.title} | {APP_NAME}
			</title>
			<meta name='description' content={job.mdesc} />
			<link rel='canonical' href={`${DOMAIN}/jobs/${query.slug}`} />
			<meta property='og:title' content={`${job.title}| ${APP_NAME}`} />
			<meta property='og:description' content={job.mdesc} />
			<meta property='og:type' content='webiste' />
			<meta property='og:url' content={`${DOMAIN}/jobs/${query.slug}`} />
			<meta property='og:site_name' content={`${APP_NAME}`} />

			<meta property='og:image' content={`${API}/job/photo/${job.slug}`} />
			<meta
				property='og:image:secure_url'
				ccontent={`${API}/job/photo/${job.slug}`}
			/>
			<meta property='og:image:type' content='image/jpg' />
		</Head>
	);

	const showJobCategories = job =>
		job.categories.map((c, i) => (
			<Link key={i} href={`/categories/${c.slug}`}>
				<a className='btn btn-primary mr-1 ml-1 mt-3'>{c.name}</a>
			</Link>
		));

	const showJobTags = job =>
		job.tags.map((t, i) => (
			<Link key={i} href={`/tags/${t.slug}`}>
				<a className='btn btn-outline-primary mr-1 ml-1 mt-3'>{t.name}</a>
			</Link>
		));

	const showRelatedJob = () => {
		return related.map((job, i) => (
			<div className='col-md-4' key={i}>
				<article>
					<SmallCard job={job} />
				</article>
			</div>
		));
	};

	return (
		<React.Fragment>
			{head()}
			<Layout>
				<main className='testMargin'>
					<article>
						<Card className='singleJobCard'>
							<CardHeader>
								<CardTitle>
									<h3 className='pb-3 pt-3'>{job.title}</h3>
								</CardTitle>
								<p className='mt-1'>
									Posted by {job.postedBy.jobTitle} | Published{' '}
									{moment(job.updatedAt).fromNow()}
								</p>
							</CardHeader>

							<div className='container pt-5'>
								<section>
									<div className='col-md-12 lead'>{renderHTML(job.body)}</div>
								</section>
							</div>
							<div className='pt-5 pb-5 pl-5'>
								{showJobCategories(job)}
								{showJobTags(job)}
								<br />
							</div>
						</Card>

						<div className='container'>
							<h4 className='text-center pt-5 pb-5 h2'>Related Jobs</h4>
							<div className='row'>{showRelatedJob()}</div>
						</div>
					</article>
				</main>
			</Layout>
		</React.Fragment>
	);
};

SingleJob.getInitialProps = ({ query }) => {
	return singleJob(query.slug).then(data => {
		if (data.error) {
			console.log(data.error);
		} else {
			// console.log('GET INITIAL PROPS IN SINGLE JOB', data);
			return { job: data, query };
		}
	});
};

export default SingleJob;
