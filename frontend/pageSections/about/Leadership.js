import {
	Jumbotron,
	Button,
	Row,
	Col,
	Card,
	CardBody,
	CardHeader,
	CardTitle,
	CardFooter,
	CardText
} from 'reactstrap';
import { FaLinkedin } from 'react-icons/fa';

const Leadership = () => {
	return (
		<div className='container'>
			<hr className='featurette-divider' />
			<Row className='leadershipSection pt-5'>
				<Col md='4'>
					<Card className='teamCards'>
						<CardHeader className='leadershipCardHead p-4'>
							<img
								className='teamPageImg'
								src='/static/images/scott-2.jpg'
								alt='Scott Dudash Image'
							/>
						</CardHeader>
						<CardBody>
							<CardTitle className='leadershipCardName text-center '>
								Scott Dusash
							</CardTitle>
						</CardBody>
						<CardFooter className='leadershipCardFooter'>
							<ul className='socialIcons'>
								<li>
									<a href='/'>
										<FaLinkedin />
									</a>
								</li>
							</ul>
						</CardFooter>
					</Card>
				</Col>
				<Col md='4'>
					<Card className='teamCards'>
						<CardHeader className='leadershipCardHead p-4'>
							<img
								className='teamPageImg'
								src='/static/images/hannah-2.jpg'
								alt='Hannah Frey Bio Image'
							/>
						</CardHeader>
						<CardBody>
							<CardTitle className='leadershipCardName text-center '>
								Hannah Frey
							</CardTitle>
						</CardBody>
						<CardFooter className='leadershipCardFooter'>
							<ul className='socialIcons'>
								<li>
									<a href='/'>
										<FaLinkedin />
									</a>
								</li>
							</ul>
						</CardFooter>
					</Card>
				</Col>
				<Col md='4'>
					<Card className='teamCards'>
						<CardHeader className='leadershipCardHead p-4'>
							<img
								className='teamPageImg'
								src='/static/images/mike.jpg'
								alt='Generic placeholder image'
							/>
						</CardHeader>
						<CardBody>
							<CardTitle className='leadershipCardName text-center '>
								Diamond Stud
							</CardTitle>
						</CardBody>
						<CardFooter className='leadershipCardFooter'>
							<ul className='socialIcons'>
								<li>
									<a href='/'>
										<FaLinkedin />
									</a>
								</li>
							</ul>
						</CardFooter>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default Leadership;
