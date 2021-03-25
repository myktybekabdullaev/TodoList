import React from 'react';

const Header = ({todos}) => {
    const more = () => {
       return  todos.filter((todo) => todo.isActive).length
    };
    const done = () => {
        return todos.filter((todo) => !todo.isActive).length
    };
    return (
            <header>
                <div className='header-container'>
                    <h1>Todo List</h1>
                    {todos.length === 0 ? '' : <div className="statusBar">
                        {more()} more to do, {done()} done
                    </div>}
                </div>
            </header>
    );
};

export default Header;