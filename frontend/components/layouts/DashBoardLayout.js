import DarkNav from '../navbars/DarkNav';
import LandingFooter from '../footers/LandingFooter';
import DashSideNav from '../navbars/DashSideNav';

const DashBoardLayout = ({ children }) => {
	return (
		<React.Fragment>
			<DarkNav />
			{children}
		</React.Fragment>
	);
};

export default DashBoardLayout;
