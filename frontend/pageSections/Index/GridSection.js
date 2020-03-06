import { Container, Row, Col } from 'reactstrap';
import AboutModal from './modals/AboutModal';
import CareersModal from './modals/CareersModal';
import ContactModal from './modals/ContactModal';
import SolutionsModal from './modals/SolutionsModal';

const GridSection = props => {
	return (
		<Container>
			<Row xs='2' lg='4' className='gridRow homeGridRow'>
				<Col className='gridCol'>
					<AboutModal />
				</Col>
				<Col className='gridCol'>
					<CareersModal />
				</Col>
				<Col className='gridCol'>
					<SolutionsModal />
				</Col>
				<Col className='gridCol'>
					<ContactModal />
				</Col>
			</Row>
		</Container>
	);
};

export default GridSection;
