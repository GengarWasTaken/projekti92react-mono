import React from 'react'

function Item (props){
        return(

            <div className="item" onClick={() => props.onClick(props)}>
                <p className="name">{props.name}</p>
                <p className="model">{props.model}</p>
            </div>

        )

}

export default Item
