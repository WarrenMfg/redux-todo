/*
If Redux Thunk middleware is enabled,
any time you attempt to dispatch a function instead of an action object,
the middleware will call that function with dispatch method as the first argument and getState as the second argument.
*/
import { loadTodosInProgress, loadTodosSuccess, loadTodosFailure} from './actions';
import { createTodo, removeTodo, completeTodo } from './actions';

const displayAlert = err => alert(err.message);

export const loadTodos = () => async dispatch => {
  try {
    dispatch(loadTodosInProgress());
    const response = await fetch('http://localhost:8080/todos');
    const todos = await response.json();
    dispatch(loadTodosSuccess(todos));
  } catch (err) {
    dispatch(loadTodosFailure());
    displayAlert(err);
  }
};

export const addTodoRequest = text => async dispatch => {
  try {
    const response = await fetch('http://localhost:8080/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text })
    });

    const todo = await response.json();
    dispatch(createTodo(todo));
  } catch (err) {
    dispatch(loadTodosFailure());
    displayAlert(err);
  }
};

export const removeTodoRequest = id => async dispatch => {
  try {
    const response = await fetch(`http://localhost:8080/todos/${id}`, {
      method: 'DELETE'
    });
    const removed = await response.json();
    dispatch(removeTodo(removed));

  } catch (err) {
    displayAlert(err);
  }
};

export const completeTodoRequest = id => async dispatch => {
  try {
    const response = await fetch(`http://localhost:8080/todos/${id}/completed`, {
      method: 'POST'
    });
    const completed = await response.json();
    dispatch(completeTodo(completed));

  } catch (err) {
    displayAlert(err);
  }
};