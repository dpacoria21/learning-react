import { useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";


const initialState = [
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la piedra del alma',
        done: false,
    },
    {
        id: new Date().getTime() * 3 + 100,
        description: 'Recolectar la piedra del poder',
        done: false,
    },
    {
        id: new Date().getTime() * 3 + 200,
        description: 'Recolectar la piedra de la mente',
        done: false,
    },
]

const handleNewTodo = (todo) => {
    console.log(todo);
}

export default function TodoApp() {

    const [state, dispatch] = useReducer( todoReducer, initialState);

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
