import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import CreateJob from '../../../components/crud/CreateJob';
import AdminSideNav from '../../../components/navbars/AdminSideNav';

const Job = () => {
	return (
		<Layout>
			<Admin>
				<div className='container-fluid'>
					<div className='testMargin'>
						<div className='row'>
							<div className='col-12 gradient-title'>
								<h1>Admin DashBoard</h1>
							</div>
							<div className='col-md-2'>
								<AdminSideNav />
							</div>
							<div className='col-md-10'>
								<CreateJob />
							</div>
						</div>
					</div>
				</div>
			</Admin>
		</Layout>
	);
};

export default Job;
