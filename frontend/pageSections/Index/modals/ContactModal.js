import { useState } from 'react';
import Link from 'next/link';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { MdPermContactCalendar } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';

const ContactModal = props => {
	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	return (
		<div>
			<Button className='modalBTNs' onClick={toggle}>
				<MdPermContactCalendar />
				<hr />
				Contact
			</Button>
			<Modal isOpen={modal} toggle={toggle} className='indexModals'>
				<ModalHeader toggle={toggle}>Contact</ModalHeader>
				<ModalBody>
					<div className='centerIMG'>
						<img
							src='/static/images/pic04.jpg'
							alt='About Us Photo'
							className='modalPhoto'
						/>
					</div>
					<hr />
					<h4 className='major'>Connect With Us!</h4>
					<ul className='socialIcons'>
						{/* <li><a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a></li> */}

						<li>
							<a href='/'>
								<FaLinkedin />
							</a>
						</li>
					</ul>

					<h5 className='contactText'>Office Address:</h5>
					<p>
						Accolade Technologies, LLC
						<br />
						10810 Guilford Road, Suite 108
						<br />
						Annapolis Junction, MD 20701
					</p>
					<hr />
					<h5 className='page-title'>Telephone:</h5>
					<p>
						Office: 301-490-9213
						<br />
						Fax: 301-490-9569
					</p>
					<hr />
					<h5 className='page-title'>Electronic Mail:</h5>
					<p className='contactText'>
						<a
							className='contactText contactLink'
							href='mailto:information@accolade-llc.com'
						>
							Send us messages at: information@accolade-llc.com
						</a>
						<br />
						<a
							className='contactText contactLink'
							href='mailto:careers@accolade-llc.com'
						>
							Send us resumes at: careers@accolade-llc.com
						</a>
						<br />
						<a
							className='contactText contactLink'
							href='mailto:contracts@accolade-llc.com'
						>
							Our contracts office is: contracts@accolade-llc.com
						</a>
						<br />
						<a
							className='contactText contactLink'
							href='mailto:support@accolade-llc.com'
						>
							IT Support is: support@accolade-llc.com
						</a>
					</p>
				</ModalBody>
				<ModalFooter>
					<Link
						href='mailto:information@accolade-llc.com?Subject=Question%20About%20Accolade!'
						prefetch={false}
					>
						<a>
							<Button color='info'>Email Us</Button>{' '}
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

export default ContactModal;
