import LightLayout from '../components/layouts/LightLayout';
import CommunityFeatured from '../pageSections/about/CommunityFeatured';
import CommunityHeader from '../pageSections/about/CommunityHeader';

const Test = () => {
	return (
		<LightLayout>
			<div className='communityPage'>
				<CommunityHeader />
				<div className='communityTitle pt-4 pb-4'>
					<h2>Our Passion</h2>
				</div>
				<div className='container marketing'>
					<CommunityFeatured />
				</div>
			</div>
		</LightLayout>
	);
};

export default Test;
