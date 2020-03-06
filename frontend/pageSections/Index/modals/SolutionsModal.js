import { useState } from 'react';
import Link from 'next/link';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FaPuzzlePiece } from 'react-icons/fa';

const SolutionsModal = props => {
	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	return (
		<div>
			<Button className='modalBTNs' onClick={toggle}>
				<FaPuzzlePiece />
				<hr />
				Solutions
			</Button>
			<Modal isOpen={modal} toggle={toggle} className='indexModals'>
				<ModalHeader toggle={toggle}>Solutions</ModalHeader>
				<ModalBody>
					<div className='centerIMG'>
						<img
							src='/static/images/pic02.jpg'
							alt='About Us Photo'
							className='modalPhoto'
						/>
					</div>
					<hr />
					<h4>Customer Solutions</h4>
					<p>
						At Accolade we are professional problems solvers. The first step in
						solving a problem is knowing the problem. Listening to customers
						like you. Seeing your requirements from your perspective.
						Demonstrating that we've assisted other customers with similar
						'unique' challenges before. It all starts with listening and ends
						with meeting your needs. No challenge is too large or too small
						because when it is your system it is always a big deal. Our pledge
						is that we will be there with you through the entire process from
						initial talks to successful completion.
					</p>

					<p>
						Our technical engineers have designed, implemented, migrated and
						supported single stand-alone servers with a few users or multiple
						domain enterprise systems that consist of hundreds of systems and
						10's of thousands of users. Our many years of experience in these
						customer spaces make us uniquely qualified to be able to sit down
						and understand your needs based on more than just following industry
						best practices. We have the experience to know how those best
						practices can be best utilized in your distinctive environment.
					</p>

					<h4>Capabilities</h4>
					<h5>Cybersecurity Technology</h5>
					<p>
						Our customers have unique needs and therefore require innovative
						solutions to ensure confidentiality, integrity and credibility. We
						at Accolade Technologies specialize in supporting the intelligence
						and defense communities by offering sophisticated technical and
						analytical expertise, mission understanding and past performance
						needed to bring success to any project. Our proactive and
						streamlined approach to cyber technology enables the delivery of
						mission critical solutions at mission speed. Accolade's core
						capabilities in Cyber Technology include:
					</p>

					<ul>
						<li>Network Security &amp; Analysis System (IS) Development</li>
						<li>Information Assurance (IA)</li>
						<li>Network Design &amp; Architecture</li>
						<li>IT Security Specialist</li>
						<li>
							Cyber monitoring, and Cyber Incident Response and Documentation
						</li>
						<li>Cloud Technology</li>
					</ul>

					<h5>Signal And Target Analysis</h5>

					<p>
						The Accolade team offers a broad range of complex Signal and Target
						Intelligence capabilities including signal and Target, detection,
						processing, recognition, tracking, and analysis. Our Engineers set
						the standard for innovative solutions to the most demanding
						challenges in today's environment. We support the needs for both
						real-time, operationally critical processing and analysis as well as
						off line, in-depth analysis demanding domain knowledge. Our
						solutions are implemented in C, C++, Java and are deployed on many
						processors from Linux to Compaq/HP UNIX servers. The scope of
						Accolade's Signals and Target services encompasses:
					</p>

					<ul>
						<li>
							Signals Collection &amp; Processing, Detect, Track, Identify, and
							Evaluate
						</li>
						<li>TECHELINT &amp; COMINT Analysis &amp; Processing</li>
						<li>TECHSIGINT</li>
						<li>Unmanned Aerial Systems</li>
					</ul>

					<h5>SETA</h5>

					<p>
						Accolade's SETA professionals are well versed in government
						acquisition, systems engineering, and contracting with the full
						range of skills necessary to address any Department of Defense (DoD)
						project, program and portfolio activities across all program level
						designations (e.g., Major Systems Acquisition, Tiered Program
						designated, QRC). We assist our customers in articulating
						requirements, performing design activities, in support of DOD 5000
						and Policy 8 1,2.
					</p>

					<ul className='page-title'>
						<li className='page-title'>
							Decades of experience in strategic planning, project / program /
							portfolio management, managing defense contracts, and successfully
							supporting the full acquisition lifecycle of activities
						</li>
						<li className='page-title'>
							ODNI, IC, DoD and civil service experience
						</li>
						<li className='page-title'>
							In-Depth experience in developed and implementing Capabilities
							Based process frameworks to link strategy, capability gaps,
							resource investment, and acquisition efforts
						</li>
					</ul>

					<h5>Business Consulting</h5>

					<p>
						Accolade Technologies has a broad portfolio in Program Management,
						Acquisition Management, Technology and Logistics Management, Systems
						Engineering, Network Design and Management, Software Consulting
						Services and Implementation Consulting. We serve both the Government
						and Commercial marketplaces; specializing in the Federal Government
						and the Intelligence Community consulting. As part of our business
						consulting services, we support training development, and developed
						training concepts and training programs utilizing critical thinking
						techniques. Accolade's Business Consulting solutions are offered in
						these core capabilities:
					</p>

					<ul>
						<li>Program Management</li>
						<li>Training</li>
					</ul>

					<h5>Information Technology</h5>
					<p>
						Accolade Technologies understands technology innovation and delivers
						leading edge Information Technology (IT) support to include design,
						testing, and implementation of state-of-the art secure operating
						systems, for wide area and local area network products/services. We
						also conduct risk assessments and provides recommendations for
						systems security design and product procurement. Accolade
						Technologies is expert in security issues including architectures,
						firewalls, electronic data traffic, and network access review,
						consolidation and implementation. We conduct vulnerability analysis
						of various security technologies and IT security research, as the
						job requests and as the product life cycle predicts. Accolade
						understands technology innovation and its application in the unique
						missions of our intelligence and defense customers and specializes
						in these core capabilities:
					</p>

					<ul>
						<li>IT Infrastructure Services</li>
						<li>System/Software Engineering</li>
						<li>Software /Hardware Integration &amp; Testing</li>
						<li>System Deployments &amp; QRC</li>
						<li>Configuration Management (CM)</li>
						<li>System Administration</li>
					</ul>
				</ModalBody>
				<ModalFooter>
					<Link href='/partners'>
						<a>
							<Button color='info'>Our Portfolio</Button>{' '}
						</a>
					</Link>{' '}
					<Button color='danger' onClick={toggle}>
						Close
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
};

export default SolutionsModal;
