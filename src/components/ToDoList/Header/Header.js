import React from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import AddToDoInput from './AddToDoInput';


const Header = ({ list, addToDo, setDisplayList }) => (
  <header className="header">
    <h1>todos</h1>
    <AddToDoInput
        list={list}
        addToDo={addToDo}
        setDisplayList={setDisplayList}
    />
  </header>
);


Header.propTypes = {
  list: arrayOf(shape({
    done: bool,
    id: string,
    title: string,
  })),
  addToDo: func,
  setDisplayList: func,
};


export default Header;