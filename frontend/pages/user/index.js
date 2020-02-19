import Layout from '../../components/Layout';
import Private from '../../components/auth/Private';
import DashSideNav from '../../components/navbars/DashSideNav';
import ProfileUpdate from '../../components/auth/ProfileUpdate';

const UserIndex = () => {
	return (
		<Layout>
			<Private>
				<div className='bg-page'>
					<div className='testMargin'>
						<div className='row'>
							<div className='col-12 gradient-title'>
								<h1>User DashBoard</h1>
							</div>

							<DashSideNav />
							<ProfileUpdate />
						</div>
					</div>
				</div>
			</Private>
		</Layout>
	);
};

export default UserIndex;
