import { useState } from 'react';
import Link from 'next/link';

import { ListGroup, ListGroupItem, Row, Col, Card } from 'reactstrap';

const AdminSideNav = () => {
	return (
		<div className='adminSideNav'>
			<ul className='list-group adminSideNav'>
				<li className='list-group-item'>
					<Link href='/user'>
						<a>My Profile</a>
					</Link>
				</li>
				<li className='list-group-item'>
					<Link href='/users'>
						<a>User DataBase</a>
					</Link>
				</li>
				<li className='list-group-item'>
					<Link href='/admin/crud/category'>
						<a>Create Category</a>
					</Link>
				</li>

				<li className='list-group-item'>
					<Link href='/admin/crud/tag'>
						<a>Create Tag</a>
					</Link>
				</li>

				<li className='list-group-item'>
					<a href='/admin/crud/job'>Create Job</a>
				</li>

				<li className='list-group-item'>
					<Link href='/admin/crud/jobs'>
						<a>Manage Jobs</a>
					</Link>
				</li>

				<li className='list-group-item'>
					<Link href='/signup'>
						<a>Create User</a>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default AdminSideNav;
