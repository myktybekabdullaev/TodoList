import React, {useState, useEffect} from 'react';
import './app.css'
import Header from "../header";
import NavPanel from "../navPanel";
import TodoList from "../todoList";
import AddForm from "../addForm";

const App = () => {
    const [todos, setTodos] = useState([]);
    const [inputText, setInputText] = useState('');
    const [status, setStatus] = useState('all');
    const [searchInput, setSearchInput] = useState('');
    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem('todo')))
    }, []);
    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todos));
    },[todos]);
    return (
        <div className='app'>
            <div className="app-container">
                <Header todos={todos}/>
                <NavPanel status={status} setStatus={setStatus} setSearchInput={setSearchInput}/>
                {todos.length === 0 ? <div className='mb-3 border p-3 text-center'>Here should be you todos</div> : <TodoList todos={todos} setTodos={setTodos} status={status} searchInput={searchInput}/>}
                <AddForm setTodos={setTodos} todos={todos} inputText={inputText} setInputText={setInputText}/>
            </div>
        </div>
    );
};

export default App;