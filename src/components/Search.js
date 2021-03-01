import React from 'react'

function Search(props) {
    return (
        <input type="text" placeholder="Search" onKeyDown={(e) => props.onKeyDown(e.target.value)}/>
    )
}

export default Search
