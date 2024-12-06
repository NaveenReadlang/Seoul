import React from 'react'
// import './components/Seoal/Seoul.css';

const SearchBar = () => {
  
  return (
    <>
        <div className='search-box'>
            <input
                type="text"
                name="search"
                placeholder='search'
                value={undefined}
                onChange={undefined}
                // autoComplete='off'
            />
            <button type='search'>Search</button>
        </div>
    </>
  )
}
export default SearchBar;
