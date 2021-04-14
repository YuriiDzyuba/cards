import React, {Fragment} from 'react'
import {Cart} from "./Cart";

export const CartContent = (props) => {
    console.log(props, 'props')


    let carts = props.cartItems.map((e, i) => {
        return (<Cart
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
