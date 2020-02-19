import AdminLayout from '../../../components/layouts/AdminLayout';
import AdminSideNav from '../../../components/navbars/AdminSideNav';
import Admin from '../../../components/auth/Admin';
import JobRead from '../../../components/crud/JobRead';
import Link from 'next/link';

const Jobs = () => {
	return (
		<AdminLayout>
			<Admin>
				<div className='row testMargin'>
					<div className='col-md-12 pt-3 pb-5 gradient-title'>
						<h1 className='display-5 text-center'>Manage Jobs</h1>
					</div>
					<div className='col-md-4'>
						<AdminSideNav />
					</div>
					<div className='col-md-8'>
						<JobRead />
					</div>
				</div>
			</Admin>
		</AdminLayout>
	);
};

export default Jobs;
