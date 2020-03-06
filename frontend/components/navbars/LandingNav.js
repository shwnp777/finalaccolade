import { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import { APP_NAME } from '../../config';
import { signout, isAuth } from '../../actions/auth';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText
} from 'reactstrap';
import { FaLinkedin } from 'react-icons/fa';
import NewsButton from '../NewsButton';

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

const LandingNav = props => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar dark expand='md'>
				<Link href='/'>
					<NavLink>
						<img
							src='/static/images/shortlogo.png'
							alt='Accolade Logo'
							className='navLogo'
						/>
					</NavLink>
				</Link>

				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className='mr-auto landingNav' navbar>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								What Makes Us?
							</DropdownToggle>
							<DropdownMenu right className='navDropdown'>
								<DropdownItem>
									<NavLink href='/ourteam'>Our Team</NavLink>
								</DropdownItem>
								<DropdownItem>
									<NavLink href='/partners'>Our Partners</NavLink>
								</DropdownItem>
								<DropdownItem divider />
								<DropdownItem>
									<NavLink href='/community'>Our Community</NavLink>
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>

					<Nav className='rightLandingNav'>
						<NewsButton />
						{!isAuth() && (
							<NavItem>
								<Link href='/signin'>
									<NavLink>Employees</NavLink>
								</Link>
							</NavItem>
						)}
						{isAuth() && isAuth().role === 0 && (
							<NavItem>
								<Link href='/user'>
									<NavLink style={{ cursor: 'pointer' }}>{`${
										isAuth().firstName
									}'s Dashboard`}</NavLink>
								</Link>
							</NavItem>
						)}
						{isAuth() && isAuth().role === 1 && (
							<NavItem>
								<Link href='/admin'>
									<NavLink style={{ cursor: 'pointer' }}>{`${
										isAuth().firstName
									}'s Dashboard`}</NavLink>
								</Link>
							</NavItem>
						)}
					</Nav>
				</Collapse>
				<style jsx>{`
					.navLogo {
						width: 180px;
					}
					li.dropdown.nav-item:hover {
						background-color: aquamarine;
					}
				`}</style>
			</Navbar>
		</div>
	);
};

export default LandingNav;
