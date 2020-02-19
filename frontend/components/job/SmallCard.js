import Link from 'next/link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API } from '../../config';

const SmallCard = ({ job }) => {
	return (
		<div className='card'>
			<div className='card-body'>
				<section>
					<Link href={`/jobs/${job.slug}`}>
						<a>
							<h5 className='card-title'>{job.title}</h5>
						</a>
					</Link>
					<p className='card-text'>{renderHTML(job.excerpt)}</p>
				</section>
			</div>

			<div className='card-body'>
				Posted {moment(job.updatedAt).fromNow()} by{' '}
				<Link href={`/`}>
					<a className='float-right'>{job.postedBy.jobTitle}</a>
				</Link>
			</div>
		</div>
	);
};

export default SmallCard;
