import React from 'react';

const AddForm = ({setTodos, todos, inputText, setInputText}) => {
    const formHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, {
            todoName: inputText,
            isActive: true,
            isImportant: false,
            id: Math.round(Math.random() * 1000)
        }]);
        setInputText('')
    };
    return (
        <form action="" className='add-form' onSubmit={formHandler}>
            <input type="text" placeholder='What needs to be done' className='form-control down' value={inputText}
                   required onChange={(e) => {
                setInputText(e.target.value)
            }}/>
            <button type='submit' className='btn btn-success'>Add Todo</button>
        </form>
    );
};

export default AddForm;