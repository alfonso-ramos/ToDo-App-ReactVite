import { useContext } from 'react';
import { TodoContext } from '../Context';
import '../styles/components/TodoCounter.css';

function TodoCounter(){

    const {totalTodos, completedTodos} = useContext(TodoContext)

    return (
        <h2 className='TodoCounter'>Haz completado {completedTodos} de {totalTodos} TODOs</h2>
    )
}

export {TodoCounter}