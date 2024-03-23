import { ACTIONS } from '../App';

export default function Todo({ todo, dispatch }) {
  return (
    <div className="todo">
      <span
        className="todo_title"
        style={{ color: todo.complete ? 'green' : 'red' }}
      >
        {todo.title}
      </span>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
      >
        Delete
      </button>
    </div>
  );
}
