import React from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import List from './List';


const Main = ({
	list,
	displayList,
	filterStatus,
	removeTodo,
	toggleTodoStatus,
	toggleTodoListStatus,
}) => (
	<section className="main">
		<input
			id="toggle-all"
			className="toggle-all"
			type="checkbox"
			onChange={toggleTodoListStatus}
		/>
		<label htmlFor="toggle-all">
			Mark all as complete
		</label>
		<List
			list={list}
			displayList={displayList}
			filterStatus={filterStatus}
			removeTodo={removeTodo}
			toggleTodoStatus={toggleTodoStatus}
		/>
	</section>
);


Main.propTypes = {
	list: arrayOf(shape({
    done: bool,
    id: string,
    title: string,
  })),
  displayList: arrayOf(shape({
    done: bool,
    id: string,
    title: string,
  })),
  filterStatus: string,
	removeTodo: func,
	toggleTodoStatus: func,
  toggleTodoListStatus: func,
};

export default Main;