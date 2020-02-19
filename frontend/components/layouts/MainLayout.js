import LandingNav from '../navbars/LandingNav';
import LandingFooter from '../footers/LandingFooter';

const MainLayout = ({ children }) => {
	return (
		<React.Fragment>
			<LandingNav />
			{children}
			<LandingFooter />
		</React.Fragment>
	);
};

export default MainLayout;
