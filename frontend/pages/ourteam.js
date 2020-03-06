import LightLayout from '../components/layouts/LightLayout';

import TeamHeader from '../pageSections/about/TeamHeader';
import TeamMission from '../pageSections/about/TeamMission';
import Leadership from '../pageSections/about/Leadership';
import TeamCar from '../pageSections/about/TeamCar';

const OurTeam = () => {
	return (
		<LightLayout>
			<div className='teamDiv'>
				<TeamHeader />
				<div className='text-center pb-5 pt-5'>
					<h3 className='display-4'>Our Mission</h3>

					<TeamMission />
				</div>

				<div className='text-center pb-5 pt-5'>
					<h3 className='display-4'>Our Leadership</h3>
					<TeamCar />
				</div>
			</div>
		</LightLayout>
	);
};

export default OurTeam;
