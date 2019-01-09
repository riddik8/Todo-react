import React from 'react';
import { boolean, func, shape, string } from 'prop-types';
import cn from 'classnames';


const ListItem = ({ item, removeTodo, toggleTodoStatus }) => {
  const itemClass = cn({
    'completed': item.done,
  });

  return (
    <li className={itemClass}>
      <div className="view">
        <input
          id={item.id}
          title={item.title}
          className="toggle" 
          type="checkbox"
          checked={item.done}
          onChange={() => toggleTodoStatus(item.id)}
        />
        <label htmlFor={item.id}>
          {item.title}
        </label>
        <button 
          className="destroy"
          onClick={() => removeTodo(item.id)} 
        />
      </div>
    </li>
  );
};


ListItem.propTypes = {
  item: shape({
    done: boolean,
    id: string,
    title: string,
  }),
  removeTodo: func,
  toggleTodoStatus: func,
};


export default ListItem;