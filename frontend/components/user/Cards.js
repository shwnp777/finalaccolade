import { Card, CardTitle, CardHeader } from 'reactstrap';
import { API } from '../../config';

const Cards = ({ user }) => {
	return (
		<Card className='card p-4'>
			<CardHeader>
				<CardTitle>
					<h4 className='jobTitlePage'>{user.firstName}</h4>
				</CardTitle>
			</CardHeader>
		</Card>
	);
};

export default Cards;
