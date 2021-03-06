import { useState, useCallback } from "react";
import Todos from './Todos'

export default function TodoListCallback(){

    console.log('Renderizando o componente Pai - callback')

    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([])

    const increment = useCallback(
        ()=>{
            setCount(count + 1)
        },[count]
    )

    const addTodo = useCallback(
        ()=>{
            setTodos(
                (todos) => [...todos, "Item número:" + count]
            )
        },[Todos]
    )

    return(
        <div>
            <Todos todos={todos} addTodo={addTodo}/>

            <div>
                <h4>Contador: {count}</h4>
                <button onClick={increment}> Incrementar</button>
            </div>
        </div>
    )
}