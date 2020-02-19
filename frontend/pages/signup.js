import Layout from '../components/Layout';
import Admin from '../components/auth/Admin';
import SignupComponent from '../components/auth/SignupComponent';

import { Card, CardBody, CardTitle } from 'reactstrap';

const Signup = () => {
	return (
		<div className='authDivTwo'>
			<Layout>
				<Admin>
					<div className='authContainer'>
						<Card>
							<div className='authTitle'>
								<CardBody>
									<CardTitle>Member Signup</CardTitle>
								</CardBody>
							</div>

							<CardBody>
								<CardTitle>Register</CardTitle>
								<SignupComponent />
							</CardBody>
						</Card>
					</div>
				</Admin>
			</Layout>
		</div>
	);
};

export default Signup;
