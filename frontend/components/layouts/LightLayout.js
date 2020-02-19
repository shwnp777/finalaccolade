import DarkNav from '../navbars/DarkNav';
import LandingFooter from '../footers/LandingFooter';

const LightLayout = ({ children }) => {
	return (
		<React.Fragment>
			<DarkNav />
			{children}
			<LandingFooter />
		</React.Fragment>
	);
};

export default LightLayout;
