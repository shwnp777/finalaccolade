import { useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';

import { ListGroup, ListGroupItem, Row, Col, Card } from 'reactstrap';

const AuthSideNav = () => {
	return (
		<Col md='2'>
			<ListGroup className='listGroupCSS'>
				<Link href='/about'>
					<a>
						<ListGroupItem className='sideNavMenu'>Time Sheet</ListGroupItem>
					</a>
				</Link>
				<Link href='https://mail.accolade-llc.com/owa/auth/logon.aspx?replaceCurrent=1&url=https%3a%2f%2fmail.accolade-llc.com%2fowa%2f'>
					<a>
						<ListGroupItem className='sideNavMenu'>Email</ListGroupItem>
					</a>
				</Link>
			</ListGroup>
		</Col>
	);
};

export default AuthSideNav;
