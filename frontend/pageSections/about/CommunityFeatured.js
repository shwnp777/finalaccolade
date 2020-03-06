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
						America is falling behind other leading nations in Science,
						Technology, Engineering, and Mathmatics. This is why Accolade
						Technologies has launched their STEM program in order to assist
						local schools and universities to give their students the
						opportunities and hands-on experience they need and deserve.
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
						Our community means everything to us - they have given us the
						opportunity to develop and grow quickly and we love giving back.
						Volunteering is a way we can continue building relationships and
						helping others. Join us on our next volunteer opportunity as we help
						each other make Annapolis and the surrounding cities stay beautiful.
						Check our news for updates on events.
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
						Working Together.{' '}
						<span className='text-muted'>Community Advantage</span>
					</h2>
					<p className='lead'>
						We give veterans and members of the community an advantage in our
						hiring process. We believe giving back also means giving jobs. If
						you are interested in anyone of our openings, please email your
						resume and contact us. Look at the job pages for updates on
						positions available.
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
