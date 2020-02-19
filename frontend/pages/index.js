import MainLayout from '../components/layouts/MainLayout';
import IndexTitle from '../pageSections/Index/Title';
import IndexBlurb from '../pageSections/Index/Blurb';
import GridSection from '../pageSections/Index/GridSection';

const Index = () => {
	return (
		<div className='bgImage'>
			<MainLayout>
				<IndexTitle />
				<IndexBlurb />
				<GridSection />
			</MainLayout>
			<style jsx>{`
				.bgImage {
					background-image: url('/static/images/space.jpg'); /* The image used */
					background-color: #cccccc; /* Used if the image is unavailable */
					height: 100vh; /* You must set a specified height */
					background-position: center; /* Center the image */
					background-repeat: no-repeat; /* Do not repeat the image */
					background-size: cover; /* Resize the background image to cover the entire container */
				}
			`}</style>
		</div>
	);
};

export default Index;
