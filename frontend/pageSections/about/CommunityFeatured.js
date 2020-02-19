const CommunityFeatured = () => {
	return (
		<div className='CommunityFeatured'>
			<hr className='featurette-divider' />

			<div className='row featurette'>
				<div className='col-md-7'>
					<h2 className='featurette-heading'>
						Education is the first step.{' '}
						<span className='text-muted'>
							Accolade is leading the way for students.
						</span>
					</h2>
					<p className='lead'>
						Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
						ligula porta felis euismod semper. Praesent commodo cursus magna,
						vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
						commodo.
					</p>
				</div>
				<div className='col-md-5'>
					<img
						className='featurette-image img-fluid mx-auto'
						src='/static/images/teach.jpg'
						alt='Generic placeholder image'
					/>
				</div>
			</div>

			<hr className='featurette-divider' />

			<div className='row featurette'>
				<div className='col-md-7 order-md-2'>
					<h2 className='featurette-heading'>
						Getting Involved.{' '}
						<span className='text-muted'>Worth more than you know.</span>
					</h2>
					<p className='lead'>
						Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
						ligula porta felis euismod semper. Praesent commodo cursus magna,
						vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
						commodo.
					</p>
				</div>
				<div className='col-md-5 order-md-1'>
					<img
						className='featurette-image img-fluid mx-auto'
						src='/static/images/work.jpg'
						alt='Generic placeholder image'
					/>
				</div>
			</div>

			<hr className='featurette-divider' />

			<div className='row featurette'>
				<div className='col-md-7'>
					<h2 className='featurette-heading'>
						And drop the hammer with this.{' '}
						<span className='text-muted'>Badda bing badda boom.</span>
					</h2>
					<p className='lead'>
						Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
						ligula porta felis euismod semper. Praesent commodo cursus magna,
						vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
						commodo.
					</p>
				</div>
				<div className='col-md-5'>
					<img
						className='featurette-image img-fluid mx-auto'
						src='/static/images/hands.jpg'
						alt='Generic placeholder image'
					/>
				</div>
			</div>
			<hr className='featurette-divider' />
		</div>
	);
};

export default CommunityFeatured;
