import React from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import ListItem from './ListItem';


const filterList = (filterStatus, list, displayList) => {
  const listToFilter = displayList.length ? displayList : list;
  let filteredList;

  switch (filterStatus) {
    case 'undone':
    filteredList = listToFilter.filter(todo => !todo.done);
      break;
    case 'done':
    filteredList = listToFilter.filter(todo => todo.done);
      break;
    case 'all':
    default:
    filteredList = listToFilter;
      break;
  }
  
  return filteredList;
}

const List = ({
  list,
  displayList,
  filterStatus,
  removeTodo,
  toggleTodoStatus,
}) => {
  const filteredList = filterList(filterStatus, list, displayList);

  return (
    <ul className="todo-list">
      {filteredList.map((item) =>
        <ListItem
          key={item.id}
          item={item}
          removeTodo={removeTodo}
          toggleTodoStatus={toggleTodoStatus}
        />
      )}
  </ul>
  );
}


List.propTypes = {
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
};


export default List;