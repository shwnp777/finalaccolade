import Link from 'next/link';
import { listUser } from '../actions/user';
import AdminLayout from '../components/layouts/AdminLayout';
import Admin from '../components/auth/Admin';
import AdminSideNav from '../components/navbars/AdminSideNav';

const UserList = ({ users, size }) => {
	const showAllUsers = () => {
		return users.map((user, i) => (
			// ()

			<tr key={i} className='userDBbody'>
				<td>{user.username}</td>
				<td>{user.firstName}</td>
				<td>{user.lastName}</td>
				<td>{user.jobTitle}</td>
				<td>
					<Link href={`tel:${user.cellPhone}`} prefetch={false}>
						<a>{user.cellPhone}</a>
					</Link>
				</td>
				<td>
					<Link href={`mailto:${user.email}`} prefetch={false}>
						<a>{user.email}</a>
					</Link>
				</td>
				<td>{user.emergencyName}</td>
				<td>
					<Link href={`tel:${user.emergencyPhone}`} prefetch={false}>
						<a>{user.emergencyPhone}</a>
					</Link>
				</td>
			</tr>
		));
	};

	return (
		<React.Fragment>
			<AdminLayout>
				<Admin>
					<div className='container-fluid'>
						<div className='testMargin'>
							<div className='row'>
								<div className='col-12 gradient-title'>
									<h1>User Database</h1>
								</div>
								<div className='col-md-2'>
									<AdminSideNav />
								</div>
								<div className='col-md-10 userDBTable'>
									<table className='table'>
										<thead>
											<tr className='userDBHeader'>
												<th scope='col'>User Name</th>
												<th scope='col'>First</th>
												<th scope='col'>Last</th>
												<th scope='col'>Job Title</th>
												<th scope='col'>Cell Phone</th>
												<th scope='col'>Email</th>
												<th scope='col'>Emergency Contact</th>
												<th scope='col'>Emergency Phone</th>
											</tr>
										</thead>
										<tbody>{showAllUsers()}</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</Admin>
			</AdminLayout>
		</React.Fragment>
	);
};

UserList.getInitialProps = () => {
	return listUser().then(data => {
		if (data.error) {
			console.log(data.error);
		} else {
			return {
				users: data.users
			};
		}
	});
};

///I might have to switch data with user

export default UserList;
