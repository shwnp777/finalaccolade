import Layout from '../../components/Layout';
import Admin from '../../components/auth/Admin';
import AdminSideNav from '../../components/navbars/AdminSideNav';
import { Card, Col } from 'reactstrap';

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
							<div className='col-md-2'>
								<AdminSideNav />
							</div>
							<Col md='10'>
								<Card className='cardDashExtra'></Card>
							</Col>
							<div className='col-md-10'></div>
						</div>
					</div>
				</div>
			</Admin>
		</Layout>
	);
};

export default AdminIndex;
