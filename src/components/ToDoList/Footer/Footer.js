import React from 'react';
import ListFilterButton from './ListFilterButton';
import { arrayOf, bool, func, shape, string } from 'prop-types';


const Footer = ({
  list,
  clearCompleted,
  filterStatus,
  handleFilterStatus
}) => {
  if (!list.length) return '';

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{list.length}</strong> {list.length === 1 ? 'item' : 'items'} left
      </span>
      <ul className="filters">
        <ListFilterButton
          filterStatus={filterStatus}
          statusValue="all"
          title="All"
          handleFilterStatus={handleFilterStatus}
        />
        <ListFilterButton
          filterStatus={filterStatus}
          statusValue="undone"
          title="Active"
          handleFilterStatus={handleFilterStatus}
        />
        <ListFilterButton
          filterStatus={filterStatus}
          statusValue="done"
          title="Completed"
          handleFilterStatus={handleFilterStatus}
        />
      </ul>
      <button 
        className="clear-completed"
        onClick={clearCompleted}
      >
        Clear completed
      </button>
    </footer>
  );
}


Footer.propTypes = {
  list: arrayOf(shape({
    done: bool,
    id: string,
    title: string,
  })),
  filterStatus: string,
  clearCompleted: func,
  handleFilterStatus: func,
};


export default Footer;