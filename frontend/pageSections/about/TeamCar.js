import Link from 'next/link';
import { Row, Col, Card } from 'reactstrap';
import { FaLinkedin } from 'react-icons/fa';

const TeamCar = () => {
	return (
		<div className='container '>
			<hr className='featurette-divider' />
			<div className='row text-center topMrg'>
				<div className='container'>
					<Row>
						<Col md='3'>
							<div className='team-member'>
								<figure>
									<img
										src='/static/images/scott-2.jpg'
										alt=''
										className='img-responsive'
									/>
									<figcaption>
										<h4 className='teamTitle'>Scott Dudash</h4>
										<p>Managing Partner</p>
										<ul>
											<li>
												<Link href='https://www.linkedin.com/in/scott-dudash-4292509/'>
													<a className='teamA'>
														<FaLinkedin />
													</a>
												</Link>
											</li>
										</ul>
									</figcaption>
								</figure>
							</div>
						</Col>

						<Col md='3'>
							<div className='team-member'>
								<figure>
									<img
										src='/static/images/hannah-2.jpg'
										alt=''
										className='img-responsive hannahIMG'
									/>
									<figcaption>
										<h4 className='teamTitle'>Hannah Frey</h4>
										<p>Director of Operations</p>
										<ul>
											<li>
												<Link href='https://www.linkedin.com/in/hannah-frey-2775a94a/'>
													<a className='teamA'>
														<FaLinkedin />
													</a>
												</Link>
											</li>
										</ul>
									</figcaption>
								</figure>
							</div>
						</Col>

						<Col md='3'>
							<div className='team-member'>
								<figure>
									<img
										src='/static/images/lee.jpg'
										alt=''
										className='img-responsive'
									/>
									<figcaption>
										<h4 className='teamTitle'>Lee Lucas</h4>
										<p>Staffing Coordinator</p>
										<ul>
											<li>
												<Link href='https://www.linkedin.com/in/lee-lucas-0829a2b2/'>
													<a className='teamA'>
														<FaLinkedin />
													</a>
												</Link>
											</li>
										</ul>
									</figcaption>
								</figure>
							</div>
						</Col>
						<Col md='3'>
							<div className='team-member'>
								<figure>
									<img
										src='/static/images/jennifer.jpg'
										alt=''
										className='img-responsive'
									/>
									<figcaption>
										<h4 className='teamTitle'>Jennifer Ramos</h4>
										<p>Program Coordinator</p>
										<ul>
											<li>
												<Link href='https://www.linkedin.com/in/jennifer-ramos-31a0ab199/'>
													<a className='teamA'>
														<FaLinkedin />
													</a>
												</Link>
											</li>
										</ul>
									</figcaption>
								</figure>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		</div>
	);
};

export default TeamCar;
