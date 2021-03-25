import React from 'react';

const Todo = ({todos, name, setTodos, todoObj}) => {
    const deleteTodo = () => {
        setTodos(todos.filter((item) => {
            return item.id !== todoObj.id
        }))
    };
    const doneHandler = () => {
        setTodos(todos.map((todo) => todo.id === todoObj.id ? {...todo, isActive: !todo.isActive} : todo))
    };
    const importantHandler = () => {
        setTodos(todos.map((todo) => todo.id === todoObj.id ? {...todo, isImportant: !todo.isImportant} : todo))
    };
    return (
        <li className='todo-item'>
            <p className={`todo-name ${todoObj.isActive ? '' : 'done'} ${todoObj.isImportant ? 'important' : ''}`}>{name}</p>
            <div>
                <button type='button' className={`btn btn-outline-success ${todoObj.isActive ? '' : 'active'}`}
                        onClick={doneHandler}><i className="fa fa-check-square-o" aria-hidden="true"></i>
                </button>
                <button type='button' className={`btn btn-outline-warning ${todoObj.isImportant ? 'active' : ''}`}
                        onClick={importantHandler}><i className="fa fa-exclamation" aria-hidden="true"></i>
                </button>
                <button type='button' className='btn btn-outline-danger' onClick={deleteTodo}>
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                </button>
            </div>
        </li>
    );
};

export default Todo;