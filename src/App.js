import { useReducer, useState } from 'react';

import Todo from './components/Todo';

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo',
};

export default function App() {
  function reducer(todos, action) {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        return [...todos, newTodo(action.payload.title)];
      case ACTIONS.TOGGLE_TODO:
        return todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, complete: !todo.complete };
          }
          return todo;
        });
      case ACTIONS.DELETE_TODO:
        return todos.filter((todo) => todo.id !== action.payload.id);
      default:
        return todos;
    }
  }

  function newTodo(title) {
    return { id: Date.now(), title, complete: false };
  }

  const [todos, dispatch] = useReducer(reducer, []);

  const [title, setTitle] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({ type: ACTIONS.ADD_TODO, payload: { title } });

    setTitle('');
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          placeholder="What would you like to do?"
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
}
