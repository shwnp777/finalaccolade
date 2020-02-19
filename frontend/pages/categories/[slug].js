import Head from 'next/head';
import Link from 'next/link';
import LightLayout from '../../components/layouts/LightLayout';
import { singleCategory } from '../../actions/category';
import { API, DOMAIN, APP_NAME } from '../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
import Card from '../../components/job/Cards';
import { Row, Col } from 'reactstrap';

const Category = ({ category, jobs, query }) => {
	const head = () => (
		<Head>
			<title>
				{category.name} | {APP_NAME}
			</title>
			<meta name='description' content={`Jobs listings for ${category.name}`} />
			<link rel='canonical' href={`${DOMAIN}/categories/${query.slug}`} />
			<meta property='og:title' content={`${category.name}| ${APP_NAME}`} />
			<meta
				property='og:description'
				content={`Jobs listings for ${category.name}`}
			/>
			<meta property='og:type' content='webiste' />
			<meta property='og:url' content={`${DOMAIN}/categories/${query.slug}`} />
			<meta property='og:site_name' content={`${APP_NAME}`} />
		</Head>
	);

	return (
		<React.Fragment>
			{head()}
			<LightLayout>
				<main pb-5>
					<div className='container-fluid'>
						<header>
							<div className='col-md-12 pt-3 pb-5 gradient-title'>
								<h1 className='display-5 text-center'>{category.name}</h1>
							</div>
							<Row>
								{jobs.map((b, i) => (
									<Col md='4'>
										<Card key={i} job={b} />
									</Col>
								))}
							</Row>
						</header>
					</div>
				</main>
			</LightLayout>
		</React.Fragment>
	);
};

Category.getInitialProps = ({ query }) => {
	return singleCategory(query.slug).then(data => {
		if (data.error) {
			console.log(data.error);
		} else {
			return { category: data.category, jobs: data.jobs, query };
		}
	});
};

export default Category;
