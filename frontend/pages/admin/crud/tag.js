import AdminLayout from '../../../components/layouts/AdminLayout';
import Admin from '../../../components/auth/Admin';
import Tag from '../../../components/crud/Tag';
import { Card, CardHeader, CardBody, CardTitle } from 'reactstrap';
import AdminSideNav from '../../../components/navbars/AdminSideNav';

const CrudTag = () => {
	return (
		<AdminLayout>
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
							<div className='col-md-8'>
								<Card>
									<CardHeader>
										<CardTitle>
											<h4>Create Tag</h4>
										</CardTitle>
									</CardHeader>
									<CardBody>
										<Tag />
									</CardBody>
								</Card>
							</div>
						</div>
					</div>
				</div>
			</Admin>
		</AdminLayout>
	);
};

export default CrudTag;
