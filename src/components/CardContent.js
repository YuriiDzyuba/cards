import React from 'react'
import {Card} from "./Card";

export const CardContent = (props) => {

    let carts = props.cartItems.map((e, i) => {
        return (<Card
            cartQuantity ={props.cartItems.length}
            key={i}
            number={i + 1}
            header={e[0]}
            content={e[1]}
            imgUrl={e[2]}
        />)

    })

    return (
        <div className="cartContent">
            <div className="row justify-content-md-center">
                {carts}
            </div>
        </div>

    )
}
