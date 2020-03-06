import Link from 'next/link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API } from '../../config';
import {
	Card,
	CardBody,
	CardHeader,
	CardTitle,
	CardFooter,
	CardText
} from 'reactstrap';

const SmallCard = ({ job }) => {
	return (
		<Card>
			<CardHeader className='smallCardHeader'>
				<CardTitle>
					<Link href={`/jobs/${job.slug}`}>
						<a>
							<h5 className='card-title smallCardTitle'>{job.title}</h5>
						</a>
					</Link>
				</CardTitle>
			</CardHeader>
			<CardBody>{renderHTML(job.excerpt)}</CardBody>

			<CardFooter>Posted {moment(job.updatedAt).fromNow()}</CardFooter>
		</Card>
	);
};

export default SmallCard;
