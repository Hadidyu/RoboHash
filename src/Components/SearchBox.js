import React from 'react'

const SearchBox = ({searchfield,searchChange }) => {
  return (
    <div>
        <input 
        type='search' 
        placeholder='Search Robo' 
        className='pa3 ba4 b--blue bg-gold'
        onChange={searchChange}
        />
    </div>
  )
}

export default SearchBox