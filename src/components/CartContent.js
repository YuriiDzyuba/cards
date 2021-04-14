import React, {Fragment} from 'react'
import './cartQuantity.scss'

export const CartQuantity = () => {
    return (
        <div className='cartQuantity'>
            <div>
                <h4>Enter cart quantity:</h4>
            </div>
            <div>
                <div className="input-field col s12">
                    <i className="material-icons prefix"></i>
                    <input type="text" id="autocomplete-input" className="autocomplete"></input>
                    <label htmlFor="autocomplete-input">Autocomplete</label>
                </div>
            </div>
        </div>
    )
}
