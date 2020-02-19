import MainLayout from '../components/layouts/MainLayout';
import SigninComponent from '../components/auth/SigninComponent';
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button
} from 'reactstrap';

const Signin = () => {
	return (
		<div className='authDiv'>
			<MainLayout>
				<h3 className='authText'>Valued Member of the Accolade Family!</h3>
				<div className='authContainer'>
					<Card>
						<div className='authTitle'>
							<CardBody>
								<CardTitle>Employee Login</CardTitle>
							</CardBody>
						</div>

						<CardBody>
							<CardTitle>Signin</CardTitle>
							<SigninComponent />
						</CardBody>
					</Card>
				</div>
			</MainLayout>
		</div>
	);
};

export default Signin;
