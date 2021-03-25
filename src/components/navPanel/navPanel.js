import React from 'react';
import StatusBtns from "../statusBtns";
import Search from "../search";

const NavPanel = ({status, setStatus, setSearchInput}) => {
    return (
        <div className='search'>
            <Search setSearchInput={setSearchInput}/>
            <StatusBtns status={status} setStatus={setStatus}/>
        </div>
    );
};

export default NavPanel;