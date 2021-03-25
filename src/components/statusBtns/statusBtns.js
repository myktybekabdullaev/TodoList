import React from 'react';

const StatusBtns = ({status, setStatus}) => {
    const statusHandler = (e) => {
        setStatus(e.target.value)
    };
    return (
        <div>
            <button type='button' className={`btn btn-outline-info ${status === 'all' ? 'active' : ''}`} value='all' onClick={statusHandler}>All</button>
            <button type='button' className={`btn btn-outline-info ${status === 'active' ? 'active' : ''}`} value='active' onClick={statusHandler}>Active</button>
            <button type='button' className={`btn btn-outline-info ${status === 'done' ? 'active' : ''}`} value='done' onClick={statusHandler}>Done</button>
        </div>
    );
};

export default StatusBtns;