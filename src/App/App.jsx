import { useTodos } from "../Hooks/useTodos.js";
import { TodoCounter, TodoSearch, TodoList, TodoItem, TodoForm, CreateTodoButton } from "../components";
import { Modal } from "../Modal/Modal.jsx";
import { TodoHeader } from '../Containers/TodoHeader.jsx';

function App() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        // Propiedades del TodoCounter
        totalTodos,
        completedTodos,
        // Propiedades del TodoSearch
        searchValue,
        setSearchValue,
        // Propiedades del TodoForm
        addTodo,
    } = useTodos()

    return (
        <>
            <TodoHeader>
                <TodoCounter
                    totalTodos={totalTodos}
                    completedTodos={completedTodos}
                />
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </TodoHeader>

            <TodoList>
                {error && <p>A ocurridoun error, recarga la pagina o vuelve mas tarde</p>}
                {loading && <p>Cargando...</p>}
                {(!loading &&
                    !searchedTodos.length) &&
                    <p>Crea tu primer ToDo</p>}
                {searchedTodos.map(todo => (<TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                />))}
            </TodoList>

            {!!openModal && (
                <Modal>
                    <TodoForm
                        addTodo={addTodo}
                        setOpenModal={setOpenModal}
                    />
                </Modal>
            )}

            <CreateTodoButton
                setOpenModal={setOpenModal}
                openModal={openModal}
            />
        </>
    )
}

export default App;
