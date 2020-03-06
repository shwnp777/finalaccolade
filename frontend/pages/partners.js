import LightLayout from '../components/layouts/LightLayout';

import PartnerHeader from '../pageSections/about/PartnerHeader';
import PartnerLogo from '../pageSections/about/PartnerLogo';

const OurPartners = () => {
	return (
		<LightLayout>
			<div className='teamDiv'>
				<PartnerHeader />
				<PartnerLogo />
			</div>
		</LightLayout>
	);
};

export default OurPartners;
