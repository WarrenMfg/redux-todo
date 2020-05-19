import React from 'react';
import { connect } from 'react-redux';
import { removeTodo, completeTodo } from './actions';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './TodoList.css';


const TodoList = ({ todos, handleRemoveTodo, handleCompleteTodo }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo, i) => <TodoListItem key={i} todo={todo} handleRemoveTodo={handleRemoveTodo} handleCompleteTodo={handleCompleteTodo} />)}
  </div>
);

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  handleRemoveTodo: text => dispatch(removeTodo(text)),
  handleCompleteTodo: text => dispatch(completeTodo(text))
});

// avoid connecting components to redux store if you plan on reusing them with different data; instead use parent component if possible
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);