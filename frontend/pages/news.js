import LightLayout from '../components/layouts/LightLayout';

import UpComing from '../pageSections/news/UpComing';

const News = () => {
	return (
		<LightLayout>
			<div className='NewsDiv'>
				<h1>News Page</h1>
				<UpComing />
			</div>
		</LightLayout>
	);
};

export default News;
