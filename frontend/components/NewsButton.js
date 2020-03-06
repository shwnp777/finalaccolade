import { useState } from 'react';
import Link from 'next/link';
import { NavItem, NavLink, Tooltip } from 'reactstrap';

const NewsButton = props => {
	const [tooltipOpen, setTooltipOpen] = useState(false);

	const toggle = () => setTooltipOpen(!tooltipOpen);

	return (
		<React.Fragment>
			<NavItem className='newsLink' id='newsButton'>
				<Link href='/news'>
					<NavLink style={{ cursor: 'pointer' }}>Latest News</NavLink>
				</Link>
			</NavItem>
			<Tooltip
				id='newsToolTip'
				placement='bottom'
				isOpen={tooltipOpen}
				target='newsButton'
				toggle={toggle}
			>
				Check out our Latest News and Events!!
			</Tooltip>
		</React.Fragment>
	);
};

export default NewsButton;
