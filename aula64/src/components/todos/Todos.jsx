export default function Todos({todos, addTodo}){

    return(
        <div>
            <h4>Minha lista de afazeres</h4>
            {
                todos.map(
                    (todo, index) => {
                        return (
                            <div key={index}>
                                <p>Item: {todo}</p>
                            </div>
                        )
                    }
                )
            }
            <button
                onClick={addTodo}
            >
                Adicionar Item
            </button>
        </div>
    )


}