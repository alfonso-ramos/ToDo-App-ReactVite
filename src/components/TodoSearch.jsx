import { useContext } from 'react';
import { TodoContext } from '../Context/index.jsx';
import '../styles/components/TodoSearch.css'

export function TodoSearch(){
    const {searchValue, setSearchValue} = useContext(TodoContext)

    const onSearchValueChange = (event) =>{
        setSearchValue(event.target.value)
    }

    return(
        <input
            className='TodoSearch'
            placeholder="Buscar"
            value={searchValue}
            onChange={onSearchValueChange}
        />
    )
}