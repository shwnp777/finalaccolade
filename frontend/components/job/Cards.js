import Link from 'next/link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { Card, CardTitle, CardHeader } from 'reactstrap';
import { API } from '../../config';

const Cards = ({ job }) => {
	const showJobCategories = job =>
		job.categories.map((c, i) => (
			<Link key={i} href={`/categories/${c.slug}`}>
				<a className='badge badge-primary mr-1 ml-1'>{c.name}</a>
			</Link>
		));

	const showJobTags = job =>
		job.tags.map((t, i) => (
			<Link key={i} href={`/tags/${t.slug}`}>
				<a className='badge badge-secondary mr-1 ml-1'>{t.name}</a>
			</Link>
		));

	return (
		<Card className='card p-4'>
			<CardHeader>
				<CardTitle>
					<Link href={`/jobs/${job.slug}`}>
						<a>
							<h4 className='jobTitlePage'>{job.title}</h4>
						</a>
					</Link>
				</CardTitle>
			</CardHeader>
			<section>
				<p>
					Posted by {job.postedBy.jobTitle} | Published{' '}
					{moment(job.updatedAt).fromNow()}
				</p>
			</section>
			<section>
				{showJobCategories(job)}
				{showJobTags(job)}
			</section>
		</Card>
	);
};

export default Cards;
