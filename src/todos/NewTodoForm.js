import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTodo } from './actions';
import './NewTodoForm.css';


const NewTodoForm = ({ todos, handleCreateTodo }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        placeholder="Type your new todo here"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button
        className="new-todo-button"
        onClick={() => {
          const isDuplicateTodo = todos.some(todo => todo.text === inputValue);
          if (!isDuplicateTodo) {
            handleCreateTodo(inputValue);
            setInputValue('');
          }
        }}
      >
        Create Todo
      </button>
    </div>
  )
};

// entire app state gets passed in
// returns properties of state that our component needs access to
const mapStateToProps = state => ({
  todos: state.todos // todos is now accessible in props
});

// map action creators to props; connected component no longer receives props.dispatch() when this argument is passed into connect()
// can pass these action creators down to child components
const mapDispatchToProps = dispatch => ({
  handleCreateTodo: text => dispatch(createTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);