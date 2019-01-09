import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';


class ToDoList extends Component {
	state = {
		list: [],
		displayList: [],
		listStatus: true,
		filterStatus: 'all',
		filteredItems: null, 
	}

	addToDo = (value) => {
		const newToDoItem = {
			title: value,
			id: Math.random().toString(36).substr(2, 16),
			done: false
		};

		this.setState({ list: [...this.state.list, newToDoItem] });
	};
  
  handleFilterStatus = (filterStatus) => this.setState({
		filterStatus
	});

	removeTodo = (id) => {
		const list = this.state.list.filter((todo) => todo.id !== id);

		this.setState({
			list: list,
			displayList: list
		});
	};

	setDisplayList = (displayList) => this.setState({ displayList });

	toggleTodoStatus = (id) => {
    const list = this.state.list.map(todo => {
      if (todo.id === id) {
        todo = {
          ...todo,
          done: !todo.done,
        }
      }
			return todo;
		});

		this.setState({
			list: list,
			displayList: list
		});
	}

	toggleTodoListStatus = () => {
    const { listStatus } = this.state;
		const list = this.state.list.map((todo) => ({
			...todo,
			done: listStatus
		}));

		this.setState({
			list: list,
			displayList: list,
			listStatus: !listStatus
		});
	};

	clearCompleted = () => {
		const { list } = this.state;
		const uncompletedList = list.filter(item => !item.done);

		this.setState({
			list: uncompletedList,
			displayList: uncompletedList,
			filterStatus: 'all'
		});
	}

	render() {
		const { list, displayList, filterStatus } = this.state;

		return (
			<section className="todoapp">
					<Header
						list={list}
						addToDo={this.addToDo}
						setDisplayList={this.setDisplayList}
					/>
					<Main
						list={list}
						displayList={displayList}
						filterStatus={filterStatus}
						removeTodo={this.removeTodo}
						toggleTodoStatus={this.toggleTodoStatus}
						toggleTodoListStatus={this.toggleTodoListStatus}
					/>
					<Footer
						list={list}
						clearCompleted={this.clearCompleted}
						filterStatus={filterStatus}
						handleFilterStatus={this.handleFilterStatus}
					/>
			</section>
		)
	} 

}


export default ToDoList;