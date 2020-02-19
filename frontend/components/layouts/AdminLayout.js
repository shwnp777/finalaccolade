import DarkNav from '../navbars/DarkNav';
import LandingFooter from '../footers/LandingFooter';

const AdminLayout = ({ children }) => {
	return (
		<React.Fragment>
			<DarkNav />
			{children}
			<LandingFooter />
		</React.Fragment>
	);
};

export default AdminLayout;
