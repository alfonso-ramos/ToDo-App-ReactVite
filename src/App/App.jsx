import React from 'react'
import { AppUI } from './AppUI';
import { TodoProvider } from '../Context/index.jsx'

function App() {

    return (
        <TodoProvider>
            <AppUI />
        </TodoProvider>
    );
}

export default App;
