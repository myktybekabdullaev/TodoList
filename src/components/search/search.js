import React from 'react';

const Search = ({setSearchInput}) => {
    return (
        <input type="text" placeholder='search todo' onChange={(e) => setSearchInput(e.target.value)} className='form-control'/>
    );
};
export default Search;