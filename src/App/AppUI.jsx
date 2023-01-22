import { TodoContext } from "../Context/index.jsx";
import { TodoCounter, TodoSearch, TodoList, TodoItem, TodoForm, CreateTodoButton } from "../components";

import React, { useContext } from 'react'

export const AppUI = () => {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = useContext(TodoContext)
    return (
        <>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {error && <p>A ocurridoun error, recarga la pagina o vuelve mas tarde</p>}
                {loading && <p>Cargando...</p>}
                {(!loading &&
                    searchedTodos.length) &&
                    <p>Crea tu primer ToDo</p>}
                {searchedTodos.map(todo => (<TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => delete(todo.text)}
                />))}
            </TodoList>

            <CreateTodoButton
                setOpenModal={setOpenModal}
                openModal={openModal}
            />
        </>
    )
}

