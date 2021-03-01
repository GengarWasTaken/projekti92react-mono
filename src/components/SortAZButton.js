import React from 'react'

function SortAZButton(props) {

    return (

        <button className="btn sort-az" onClick={() => props.onClick(props.data)}>A-Z</button>

    )
}

export default SortAZButton