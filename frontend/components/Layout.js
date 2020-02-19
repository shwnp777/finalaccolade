import DarkNav from './navbars/DarkNav';
import LandingFooter from '../components/footers/LandingFooter';

const Layout = ({ children }) => {
	return (
		<React.Fragment>
			<DarkNav />
			{children}
			<LandingFooter />
		</React.Fragment>
	);
};

export default Layout;
