import React, { Component } from 'react';
import { func } from 'prop-types';


class AddToDoInput extends Component {
    static propTypes = {
      addToDo: func
    }

    state = {
      value: '',
    }

    handleInputChange = (e) => {
      const { value } = e.target;
      const displayList = this.props.list.filter((el) => String.prototype.startsWith.call(el.title, value));

      this.setState({ value });
      this.props.setDisplayList(displayList);
    }

    handleKeyPress = (e) => {
      if (e.key !== 'Enter') return;

      const { value } = this.state;
      const { addToDo } = this.props;

      if (!value.trim()) return;

      addToDo(value);

      this.setState({ value: '' });
    };

    render() {
      return (
        <input
          className="new-todo"
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress} 
          placeholder="What needs to be done?"
          value={this.state.value}
          autoFocus
        />
      );
    }
}


export default AddToDoInput;