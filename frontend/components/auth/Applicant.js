import { useEffect } from 'react';
import Router from 'next/router';
import { isAuth } from '../../actions/auth';

const Applicant = ({ children }) => {
	useEffect(() => {
		if (!isAuth()) {
			Router.push(`/signin`);
		}
	}, []);
	return <React.Fragment>{children}</React.Fragment>;
};

export default Applicant;
