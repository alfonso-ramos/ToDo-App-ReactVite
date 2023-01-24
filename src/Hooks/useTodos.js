import { useState } from 'react';
import { useLocalStorage } from './useLocalStorege';

function useTodos() {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', [])

    const [searchValue, setSearchValue] = useState('');

    //Para abrir o cerrar el modal
    const [openModal, setOpenModal] = useState(false)

    //Contador para ToDos completados
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    // toDos en total
    const totalTodos = todos.length

    //Filtro para los todos para que sean buscados en el Input
    const searchedTodos = todos.filter(todo => (todo.text.toLowerCase().includes(searchValue.toLowerCase())))


    const addTodo = (text) => {
        const newTodos = [...todos]
        newTodos.push({
            completed: false,
            text,
        })
        saveTodos(newTodos)
    }

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos]
        newTodos[todoIndex].completed = true
        saveTodos(newTodos)
    }

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos]
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
    }


    return (
        {
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }
    )
}

export { useTodos }