import { Card, Row, Col } from 'reactstrap';

const UpComing = props => {
	return (
		<div className='UpComing'>
			<Row>
				<Col md='6'>
					<div className='dateDiv'>
						<p>20 February 2020 - Accolade Hour</p>
					</div>

					<Card className='cardDark'>
						<p>
							<img
								src='/static/images/drink.jpg'
								className='imgDiv'
								alt='Accolade Happy Hour'
							/>
							If you missed it, you missed out! Accolade Technologies' first
							quarter Happy Hour of 2020! It was great to get together and wind
							down after our team has put so much effort into bringing in the
							New Year with a bang. Accolade is doing great things and we
							appreciate the family that we have here.
						</p>
					</Card>
				</Col>
				<Col md='6'>
					<div className='dateDiv'>
						<p>30 January 2020 - C3 Job Fair</p>
					</div>
					<Card className='cardDark'>
						<p>
							<img
								src='/static/images/jobfair.jpg'
								className='imgDiv2'
								alt='Accolade Job Fair'
							/>
							What a success! We were able to meet so many new faces and discuss
							opportunities with veterans in search of their next place of
							employment. We cannot hire everyone, but we still love to offer
							some mentorship and advice to those that sacrifice so much. We
							thank everyone for the opportunity to speak with you and we are
							always humbled at the time you give us. If you are interested in
							checking out our openings, refer to our jobs page.
						</p>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default UpComing;
