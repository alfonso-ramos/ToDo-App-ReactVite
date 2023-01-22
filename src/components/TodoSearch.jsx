import { TodoContext } from '../Context';
import '../styles/TodoSearch.css'

export function TodoSearch(){
    const {searchValue, setSearchValue} = React.useContext(TodoContext)

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