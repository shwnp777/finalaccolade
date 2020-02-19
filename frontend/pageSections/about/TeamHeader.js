import { Jumbotron, Button } from 'reactstrap';

const TeamHeader = () => {
	return (
		<div>
			<Jumbotron className='teamJumboBG'>
				<div className='d-flex h-100 text-center align-items-center'>
					<div className='w-100 text-white'>
						<h1 className='display-3'>Our Team</h1>
						<p className='lead mb-0'>
							We are more than just a workplace. We are a family!
						</p>
					</div>
				</div>
			</Jumbotron>
		</div>
	);
};

export default TeamHeader;
