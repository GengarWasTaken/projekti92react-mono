import React from 'react'

function Item (props){
        return(

            <div className="item">
                <p className="name">{props.name}</p>
                <p className="model">{props.model}</p>
            </div>

        )

}

export default Item
