import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadTodos, removeTodoRequest, completeTodoRequest } from './thunks';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './TodoList.css';


const TodoList = ({ todos, handleRemoveTodo, handleCompleteTodo, isLoading, startLoadingTodos }) => {
  useEffect(() => {
    startLoadingTodos()
  }, [])

  const loading = <div>Loading...</div>;

  const content  = (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo, i) => <TodoListItem key={i} todo={todo} handleRemoveTodo={handleRemoveTodo} handleCompleteTodo={handleCompleteTodo} />)}
    </div>
  );

  return isLoading ? loading : content;
};

const mapStateToProps = state => ({
  todos: state.todos,
  isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  handleRemoveTodo: id => dispatch(removeTodoRequest(id)),
  handleCompleteTodo: id => dispatch(completeTodoRequest(id))
});

// avoid connecting components to redux store if you plan on reusing them with different data; instead use parent component if possible
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);