import AdminLayout from '../../../components/layouts/AdminLayout';
import Admin from '../../../components/auth/Admin';
import JobUpdate from '../../../components/crud/JobUpdate';
import Link from 'next/link';

const Job = () => {
	return (
		<AdminLayout>
			<Admin>
				<div className='container-fluid marginBottom'>
					<div className='row'>
						<div className='col-md-12 pt-5 pb-5'>
							<h2>Update Job</h2>
						</div>
						<div className='col-md-12'>
							<JobUpdate />
						</div>
					</div>
				</div>
			</Admin>
		</AdminLayout>
	);
};

export default Job;
