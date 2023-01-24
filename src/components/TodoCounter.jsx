import '../styles/components/TodoCounter.css';

function TodoCounter({totalTodos, completedTodos}){
    return (
        <h2 className='TodoCounter'>Haz completado {completedTodos} de {totalTodos} TODOs</h2>
    )
}

export {TodoCounter}