import React from 'react';
import Todo from "../todo";

const TodoList = ({todos, setTodos, status, searchInput}) => {
    return (
        <ul>
            {todos.filter((todo) => {
                switch (status) {
                    case 'active':{
                        return todo.isActive
                    }
                    case 'done':{
                        return !todo.isActive
                    }
                    default:
                        return todo
                }
            }).filter((todo) => {
                return todo.todoName.includes(searchInput)
            }).map((todo) => {
               return <Todo
                   setTodos={setTodos}
                   name={todo.todoName}
                   todos={todos}
                   key={todo.id}
                   todoObj={todo}
               />
            })}

        </ul>
    );
};

export default TodoList;