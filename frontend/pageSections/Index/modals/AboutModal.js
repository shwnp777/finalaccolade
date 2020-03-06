import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Link from 'next/link';
import { MdBusiness } from 'react-icons/md';

const AboutModal = props => {
	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	return (
		<div>
			<Button className='modalBTNs' onClick={toggle}>
				<MdBusiness />
				<hr />
				About Us
			</Button>
			<Modal isOpen={modal} toggle={toggle} className='indexModals'>
				<ModalHeader toggle={toggle}>About Us</ModalHeader>
				<ModalBody>
					<div className='centerIMG'>
						<img
							src='/static/images/pic01.jpg'
							alt='About Us Photo'
							className='modalPhoto'
						/>
					</div>
					<hr />
					<div className='sdvosbLogo'>
						<img src='/static/images/SDVOSBdark.png' alt='' />
					</div>
					<hr />
					<h4 className='major'>We Are:</h4>

					<p>
						Accolade Technologies, LLC established in 2014, is a
						Service-Disabled Veteran Owned Small Business (SDVOSB) with a focus
						on providing technical, analytic, and engineering services,
						intelligence support, program management support, acquisition
						support, and other professional services to the Intelligence
						Community, employing quality, dedicated, highly technical
						individuals to provide innovative solutions to meet our customers'
						needs. We specialize in challenging areas including high performance
						computing, testing, consulting, in addition to traditional
						disciplines such as acquisition and business management support.
					</p>
					<p>
						We at Accolade are passionate about exceeding expectations at every
						level. Our company's staff have over 100 years of professional
						experience in software, hardware and system engineering and over 60
						years of experience in service delivery. Our competencies enable us
						to have a true understanding of the goals and needs of our customers
						and their missions. We perform critical consulting services on a
						variety of operations and support projects for the defense
						communities.
					</p>
					<h4>Corporate Registrations:</h4>
					<ul>
						<li>
							Registered with the DoD Office of Small Business Programs (OSBP)
							as a Small Business (SB)
						</li>
						<li>
							Registered with the Defense Logistics Agency as a Commercial and
							Government Entity (CAGE): 6YW48
						</li>
						<li>
							Registered with the U.S. Government's System for Award Management
							(SAM) to contract with the U.S. Federal Government
						</li>
						<li>Registered with D&B: DUNS 079083372</li>
						<li>Contract & Financial Mail</li>
					</ul>
				</ModalBody>
				<ModalFooter>
					<Link href='/ourteam'>
						<a>
							<Button color='info'>Learn More</Button>{' '}
						</a>
					</Link>
					<Button color='danger' onClick={toggle}>
						Close
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
};

export default AboutModal;
