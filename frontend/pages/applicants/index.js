import Layout from '../../components/Layout';
import Applicant from '../../components/auth/Applicant';
import Link from 'next/link';

const ApplicantIndex = () => {
	return (
		<Layout>
			<Applicant>
				<h1>Applicant Dashboard</h1>
			</Applicant>
		</Layout>
	);
};

export default ApplicantIndex;
