import { toggled } from "../actions";

const updateStatus = (todoId, currentStatus) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json; charset = UTF-8",
      },
      body: JSON.stringify({
        completed: !currentStatus,
      }),
    });
    const todo = await response.json();

    dispatch(toggled(todo.id));
  };
};

export default updateStatus;
