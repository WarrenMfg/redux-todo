import { CREATE_TODO, REMOVE_TODO } from './actions';

// anytime any action is fired, our reducers will get called
export const todos = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TODO: {
      const { text } = payload;
      const newTodo = {
        text,
        isComplete: false
      };

      return [...state, newTodo];
    }

    case REMOVE_TODO: {
      const { text } = payload;
      return state.filter(todo => todo.text !== text);
    }

    default:
      return state;
  }
};