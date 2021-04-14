import React, {useState} from 'react'
import Flip from 'react-reveal/Flip';

export const Cart = ({header='', content='', number, imgUrl='', cartQuantity}) => {

    const [hideCart, setHideCart] = useState(true);

    let size = 'col-4'
    let cartHeight = '25vh'
    let numberSize = '20vh'
    let numberLineHeight = '15vh'
    let cardImgWidth = imgUrl ? '90%' : '0' ;
    let cardImgHeight = imgUrl ? '45%': '0';
    let cardContentHeight = imgUrl ? '55%': '100%';

    switch (cartQuantity) {
        case 1:
        case 2:
        case 3:
        case 4:
            size = 'col-6'
            cartHeight = '45vh'
            numberSize = '38vh'
            numberLineHeight = '30vh'
            break
        case 5:
        case 6:
        case 7:
        case 8:
            size = 'col-4'
            cartHeight = '45vh'
            numberSize = '35vh'
            numberLineHeight = '25vh'
            break
        case 9:
        case 10:
        case 11:
        case 12:
            size = 'col-3'
            cartHeight = '30vh'
            numberSize = '22vh'
            numberLineHeight = '18vh'
            break
        case 13:
        case 14:
        case 15:
        case 16:
            size = 'col-2'
            cartHeight = '30vh'
            numberSize = '15vh'
            numberLineHeight = '18vh'
            break
        default:
            break
    }


    const cardStyle = {
        height: cartHeight,
        marginBottom: '25px'
    };

    const closedCard = {
        height: cartHeight,
        marginBottom: '25px',
        fontSize: numberSize,
        lineHeight: numberLineHeight
    };

    const cardImgSize = {
        height: cardImgHeight,
        maxWidth: cardImgWidth,
    };
    const cardContentSize = {
        height: cardContentHeight,
    };

    return (
        <div className={size}>
            {
                hideCart
                &&
                <Flip left>
                    <div
                        className="closedCard"
                        style={closedCard}
                        onClick={() => setHideCart(false)}
                    >
                        <p className="closedCard-title">{number}</p>
                    </div>
                </Flip>
            }
            {
                !hideCart
                &&
                <Flip left>
                    <div
                        className="card"
                        style={cardStyle}
                        onClick={() => setHideCart(true)}
                    >
                        <div
                            className="cardImgStyle"
                            style={cardImgSize}

                        >
                            <img
                                src={imgUrl}
                                >
                            </img>
                        </div>
                        <div
                            className="card-body"
                            style={cardContentSize}
                        >
                            <h5 className="card-title">{header}</h5>
                            <p className="card-text">{content}</p>
                        </div>
                    </div>
                </Flip>
            }

        </div>
    )
}
