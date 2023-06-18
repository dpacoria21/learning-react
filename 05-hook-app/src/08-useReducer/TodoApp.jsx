import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";


const initialState = [
    // {
    //     id: new Date().getTime() * 3,
    //     description: 'Recolectar la piedra del alma',
    //     done: false,
    // },
    // {
    //     id: new Date().getTime() * 3 + 100,
    //     description: 'Recolectar la piedra del poder',
    //     done: false,
    // },
    // {
    //     id: new Date().getTime() * 3 + 200,
    //     description: 'Recolectar la piedra de la mente',
    //     done: false,
    // },
];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) ?? [];
}

export default function TodoApp() {

    let [state, dispatch] = useReducer( todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(state));
    }, [state]);

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }

        dispatch(action);
    }

    return (
        <>
            <h1>TodoApp (10),  <small>Pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    {/* TodoList */}
                    <TodoList todos={state}/>
                    {/* Fin TodoList */}

                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    {/* TodoAdd  onNewTodo( todo )*/}
                    {/* {id:new Date, description: ..., done false} */}
                    <TodoAdd onNewTodo={handleNewTodo}/>
                    {/* fin TodoAdd */}

                </div>
            </div>
        </>
    )
}
