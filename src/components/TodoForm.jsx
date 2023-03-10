import React from 'react'
import '../styles/components/TodoForm.css'

const TodoForm = ({ addTodo, setOpenModal, }) => {
    const [newTodoValue, setNewTodoValue] = React.useState('')


    const onChange = (event) =>  {
        setNewTodoValue(event.target.value)
    }

    const onCancel = () =>  {
        setOpenModal(false)
    }
    const onSubmit = (event) =>  {
        event.preventDefault()
        if(newTodoValue.length <= 0) return
        addTodo(newTodoValue)
        setOpenModal(false)
    }


    return (
        <form onSubmit={onSubmit}>
            <label htmlFor=""></label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder='Agregar nuevo ToDo'
            />
            <div className='TodoForm-buttonContainer'>
                <button
                    type='button'
                    className='TodoForm-button TodoForm-button--cancel'
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className='TodoForm-button TodoForm-button--add'
                    type='submit'
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export {TodoForm}