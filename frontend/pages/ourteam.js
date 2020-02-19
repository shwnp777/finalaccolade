import LightLayout from '../components/layouts/LightLayout';

import TeamHeads from '../pageSections/about/TeamHeads';
import TeamHeader from '../pageSections/about/TeamHeader';
import TeamMission from '../pageSections/about/TeamMission';

const OurTeam = () => {
	return (
		<LightLayout>
			<div className='teamDiv'>
				<TeamHeader />
				<div className='text-center pb-5 pt-5'>
					<h3 className='display-5'>Our Mission</h3>
					<TeamMission />
				</div>
				<div className='text-center pb-5 pt-5'>
					<h3 className='display-5'>Our Leadership</h3>
				</div>
				<TeamHeads />
			</div>
		</LightLayout>
	);
};

export default OurTeam;
