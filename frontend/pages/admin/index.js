import Layout from '../../components/Layout';
import Admin from '../../components/auth/Admin';
import AdminSideNav from '../../components/navbars/AdminSideNav';

const AdminIndex = () => {
	return (
		<Layout>
			<Admin>
				<div className='container-fluid'>
					<div className='testMargin'>
						<div className='row'>
							<div className='col-12 gradient-title'>
								<h1>Admin DashBoard</h1>
							</div>
							<div className='col-md-4'>
								<AdminSideNav />
							</div>
							<div className='col-md-8'>Right Side for Other Stuff</div>
						</div>
					</div>
				</div>
			</Admin>
		</Layout>
	);
};

export default AdminIndex;
