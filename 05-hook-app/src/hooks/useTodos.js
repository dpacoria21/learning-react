import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) ?? [];
}

export const useTodos = () => {

    const [state, dispatch] = useReducer( todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(state));
    }, [state]);

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }

        dispatch(action);
    };

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id,
        });
    };

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id,
        })
    };

    return {
        state,
        handleDeleteTodo,
        todosCount: state.length,
        pendingTodosCount: state.filter(todo => todo.done === false).length,
        handleNewTodo,
        handleToggleTodo,
    }
}