const LandingFooter = () => {
	return (
		<footer className='landingFooter'>
			<div className='container'>
				<span className='text-muted'>
					Accolade Technologies, LLC | All Rights Reserved | &copy; Copyright{' '}
					{1900 + new Date().getYear()}
				</span>
			</div>
		</footer>
	);
};

export default LandingFooter;
