import { Jumbotron, Button } from 'reactstrap';

const PartnerHeader = () => {
	return (
		<div>
			<Jumbotron className='partnerJumboBG'>
				<div className='d-flex h-100 text-center align-items-center'>
					<div className='w-100 text-white'>
						<h1 className='display-3'>Our Partners</h1>
						<p className='lead mb-0'>
							Working Together to Accomplish the Mission!
						</p>
					</div>
				</div>
			</Jumbotron>
		</div>
	);
};

export default PartnerHeader;
