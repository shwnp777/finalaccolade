import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { FaBriefcase } from 'react-icons/fa';
import Link from 'next/link';

const CareersModal = props => {
	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	return (
		<div>
			<Button className='modalBTNs' onClick={toggle}>
				<FaBriefcase />
				<hr />
				Careers
			</Button>
			<Modal isOpen={modal} toggle={toggle} className='indexModals'>
				<ModalHeader toggle={toggle}>Careers</ModalHeader>
				<ModalBody>
					<div className='centerIMG'>
						<img
							src='/static/images/pic03.jpg'
							alt='Careers Photo'
							className='modalPhoto'
						/>
					</div>
					<hr />
					<h4 className='major'>Look at your Future!</h4>

					<p>
						Accolade Technologies, LLC was founded with the vision of providing
						exceptional service to both the DoD and Intelligence Community. We
						bring over six years of Government and Industry experience to our
						customers. Accolade Technologies has extensive experience with
						providing skilled personnel and solutions to the community. Our goal
						is to be recognized as an end-to-end solutions provider focused on
						strengthening this Country's ability to aggressively defend and
						protect against the enemy by providing support services and leading
						edge solutions.{' '}
					</p>

					<p>
						Accolade Technologies employees work closely with esteemed customers
						to develop solutions that allow them to carry out high-stakes
						national security missions. This position provides an opportunity to
						further advance cutting-edge technology that supports some of our
						nations core defense-intelligence services and systems.
					</p>
				</ModalBody>
				<ModalFooter>
					<Link href='/jobs'>
						<a>
							<Button color='info'>View Openings</Button>{' '}
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

export default CareersModal;
