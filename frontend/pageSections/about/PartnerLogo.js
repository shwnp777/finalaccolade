import { Jumbotron, Button, Row, Col } from 'reactstrap';

const PartnerHeader = () => {
	return (
		<div className='marginBottom'>
			<Row className='partnerIMG'>
				<Col md='12' className='mt-5 mb-5 text-center'>
					<h2>Building Lasting Relationship with Top Agencies</h2>
				</Col>
				<Col md='3'>
					<img src='/static/images/partners/nasa.png' alt='nasa logo' />
				</Col>
				<Col md='3'>
					<img src='/static/images/partners/usna.png' alt='nasa logo' />
				</Col>
				<Col md='3'>
					<img src='/static/images/partners/nsa.png' alt='nasa logo' />
				</Col>
				<Col md='3'>
					<img src='/static/images/partners/CIA-Logo.png' alt='nasa logo' />
				</Col>
			</Row>
		</div>
	);
};

export default PartnerHeader;
