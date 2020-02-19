import { Jumbotron, Button } from 'reactstrap';

const CommunityHeader = props => {
	return (
		<div>
			<Jumbotron className='jumboBG'>
				<div className='overlay'></div>
				<video
					playsInline='playsInline'
					autoPlay='autoPlay'
					muted='muted'
					loop='loop'
				>
					<source
						src='https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4'
						type='video/mp4'
					/>
				</video>
				<div className='container h-100'>
					<div className='d-flex h-100 text-center align-items-center'>
						<div className='w-100 text-white'>
							<h1 className='display-3'>Our Community</h1>
							<p className='lead mb-0'>
								Some believe it takes a village to raise a child; we believe it
								takes a community to raise a business.
							</p>
						</div>
					</div>
				</div>
			</Jumbotron>
		</div>
	);
};

export default CommunityHeader;
