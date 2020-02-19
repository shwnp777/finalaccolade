import { Card, CardHeader, CardTitle, Row, Col, CardBody } from 'reactstrap';

const TeamHeads = () => {
	return (
		<div className='container'>
			<hr className='featurette-divider' />

			<div className='row featurette'>
				<div className='col-md-7'>
					<h3 className='featurette-head'>
						Scott <span className='text-muted'>Dudash</span>
					</h3>
					<p className='lead'>
						President and Managing Partner at Accolade Technologies. Experienced
						in answering phones and taking out the trash after parties and
						continuing this run on sentence with other stuff like the backstreet
						boys look like nerds but really popular with the ladies.
					</p>
				</div>
				<div className='col-md-5'>
					<img
						className='teamPageImg'
						src='/static/images/mike.jpg'
						alt='Generic placeholder image'
					/>
				</div>
			</div>

			<hr className='featurette-divider' />

			<div className='row featurette'>
				<div className='col-md-7 order-md-2'>
					<h3 className='featurette-head'>
						Hannah <span className='text-muted'>Frey</span>
					</h3>
					<p className='lead'>
						Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
						ligula porta felis euismod semper. Praesent commodo cursus magna,
						vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
						commodo.
					</p>
				</div>
				<div className='col-md-5 order-md-1'>
					<img
						className='teamPageImg'
						src='/static/images/mike.jpg'
						alt='Generic placeholder image'
					/>
				</div>
			</div>

			<hr className='featurette-divider' />

			<div className='row featurette'>
				<div className='col-md-7'>
					<h3 className='featurette-head'>
						Stormin <span className='text-muted'>Norman</span>
					</h3>
					<p className='lead'>
						Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
						ligula porta felis euismod semper. Praesent commodo cursus magna,
						vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
						commodo.
					</p>
				</div>
				<div className='col-md-5'>
					<img
						className='teamPageImg'
						src='/static/images/mike.jpg'
						alt='Generic placeholder image'
					/>
				</div>
			</div>
			<hr className='featurette-divider' />
		</div>
	);
};

export default TeamHeads;
