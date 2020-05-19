import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from './actions';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './TodoList.css';


const TodoList = ({ todos, handleRemoveTodo }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo, i) => <TodoListItem key={i} todo={todo} handleRemoveTodo={handleRemoveTodo} />)}
  </div>
);

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  handleRemoveTodo: text => dispatch(removeTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);