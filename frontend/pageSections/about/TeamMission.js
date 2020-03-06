import { Jumbotron, Button } from 'reactstrap';

const TeamMission = () => {
	return (
		<div className='container'>
			<hr className='featurette-divider' />
			<div className='d-flex h-100 text-center align-items-center'>
				<div className='w-100 text-center align-items-center pt-5 pb-5'>
					<p
						className='missionText'
						style={{ maxWidth: '800px', display: 'block', margin: '0 auto' }}
					>
						Our Mission is to create strategic and tactical relationships
						throughout the Defense and Intelligence business community that
						significantly improves the value and capability given to our
						government in the Defense of this Nation and its Allies. We make
						improving the competitive position of our customer paramount in
						importance and work collaboratively to ensure the best service
						possible.
					</p>
				</div>
			</div>
		</div>
	);
};

export default TeamMission;
