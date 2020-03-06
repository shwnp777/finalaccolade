import Head from 'next/head';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Layout from '../../components/Layout';
import { useState } from 'react';
import { listJobsWithCategoriesAndTags } from '../../actions/job';
import Card from '../../components/job/Cards';
import { API, DOMAIN, APP_NAME } from '../../config';
import { Row, Col } from 'reactstrap';

const Jobs = ({
	jobs,
	categories,
	tags,
	totalJobs,
	jobsLimit,
	jobSkip,
	router
}) => {
	const head = () => (
		<Head>
			<title>Job Listings | {APP_NAME}</title>
			<meta
				name='description'
				content='Job listings for Accolade Technologies LLC'
			/>
			<link rel='canonical' href={`${DOMAIN}${router.pathname}`} />
			<meta property='og:title' content={`Job Listings | ${APP_NAME}`} />
			<meta
				property='og:description'
				content='Job listings for Accolade Technologies LLC'
			/>
			<meta property='og:type' content='webiste' />
			<meta property='og:url' content={`${DOMAIN}${router.pathname}`} />
			<meta property='og:site_name' content={`${APP_NAME}`} />

			<meta
				property='og:image'
				content={`${DOMAIN}/static/images/icon-logo.png`}
			/>
			<meta
				property='og:image:secure_url'
				ccontent={`${DOMAIN}/static/images/icon-logo.png`}
			/>
			<meta property='og:image:type' content='image/jpg' />
		</Head>
	);

	const [limit, setLimit] = useState(jobsLimit);
	const [skip, setSkip] = useState(0);
	const [size, setSize] = useState(totalJobs);
	const [loadedJobs, setLoadedJobs] = useState([]);

	const loadMore = () => {
		let toSkip = skip + limit;
		listJobsWithCategoriesAndTags(toSkip, limit).then(data => {
			if (data.error) {
				console.log(data.error);
			} else {
				setLoadedJobs([...loadedJobs, ...data.jobs]);
				setSize(data.size);
				setSkip(toSkip);
			}
		});
	};

	const loadMoreButton = () => {
		return (
			size > 0 &&
			size >= limit && (
				<button onClick={loadMore} className='btn btn-outline-primary btn-lg'>
					Load more
				</button>
			)
		);
	};

	const showAllJobs = () => {
		return jobs.map((job, i) => {
			// ()
			return (
				<article key={i}>
					<Card job={job} />
				</article>
			);
		});
	};

	const showAllCategories = () => {
		return categories.map((c, i) => (
			<Link href={`/categories/${c.slug}`} key={i}>
				<a className='btn btn-primary mr-1 ml-1 mt-3'>{c.name}</a>
			</Link>
		));
	};

	const showAllTags = () => {
		return tags.map((t, i) => (
			<Link href={`/tags/${t.slug}`} key={i}>
				<a className='btn btn-outline-primary mr-1 ml-1 mt-3'>{t.name}</a>
			</Link>
		));
	};

	const showLoadedJobs = () => {
		return loadedJobs.map((job, i) => (
			<article key={i}>
				<Card job={job} />
			</article>
		));
	};

	return (
		<React.Fragment>
			{head()}
			<Layout>
				<main className='jobBG'>
					<div className='container-fluid'>
						<header>
							<div className='col-md-12 pt-3 pb-5 gradient-title'>
								<h1 className='display-5 text-center'>Available Positions</h1>
							</div>
						</header>
					</div>
					<div className='container'>
						<Row>
							<Col md='3'>
								{showAllCategories()}
								<br />
								{showAllTags()}
							</Col>
							<Col md='9'>
								<div className='container-fluid'>{showAllJobs()}</div>
								<div className='container-fluid'>{showLoadedJobs()}</div>
								<div className='text-center pt-5 pb-5'>{loadMoreButton()}</div>
							</Col>
						</Row>
					</div>
				</main>
			</Layout>
		</React.Fragment>
	);
};

Jobs.getInitialProps = () => {
	let skip = 0;
	let limit = 20;
	return listJobsWithCategoriesAndTags(skip, limit).then(data => {
		if (data.error) {
			console.log(data.error);
		} else {
			return {
				jobs: data.jobs,
				categories: data.categories,
				tags: data.tags,
				totalJobs: data.size,
				jobsLimit: limit,
				jobSkip: skip
			};
		}
	});
};

export default withRouter(Jobs);
