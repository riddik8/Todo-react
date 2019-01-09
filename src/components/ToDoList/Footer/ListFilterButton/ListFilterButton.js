import React from 'react';
import cn from 'classnames';
import { func, string } from 'prop-types';


const ListFilterButton = ({ filterStatus, statusValue, title, handleFilterStatus }) => {
	const btnClass = cn({
		'selected': filterStatus === statusValue
	});

	return (
		<li>
			<a
				className={btnClass}
				onClick={() => handleFilterStatus(statusValue)}
			>
				{title}
			</a>
		</li>
	);
};


ListFilterButton.propTypes = {
	filterStatus: string,
	statusValue: string,
	title: string,
	handleFilterStatus: func,
};


export default ListFilterButton;