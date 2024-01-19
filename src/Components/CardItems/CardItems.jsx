import React from 'react'
import './CardItems.css'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/card_cross_icon.png'

function CardItems() {

    const {getTotalCardAmount, all_product, cardItems, removeFromCard} = useContext(ShopContext);

    return (
        <div className='carditems'>
            <div className='carditems-format-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cardItems[e.id] > 0)
                {
                    return (
                        <div>
                            <div className='carditems-format carditems-format-main'>
                                <img src={e.image} alt='' className='cardicon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='carditems-quantity'>{cardItems[e.id]}</button>
                                <p>${e.new_price * Number(cardItems[e.id])}</p>
                                <img className='carditems-remove-icon' src={remove_icon} alt='' onClick={()=>{removeFromCard(e.id)}} />
                            </div>
                            <hr />
                        </div>
                    )
                }
                return null;
            })}
            <div className='carditems-down'>
                <div className='carditems-total'>
                    <h1>card Totals</h1>
                    <div>
                        <div className='carditems-total-item'>
                            <p>Subtotal</p>
                            <p>${getTotalCardAmount()}</p>
                        </div>
                        <hr />
                        <div className='carditems-total-item'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='carditems-total-item'>
                            <h3>Total</h3>
                            <h3>${getTotalCardAmount()}</h3>
                        </div>
                    </div>
                    <button>PRPCEED TO CHECKOUT</button>
                </div>
                <div className='carditems-promocode'>
                    <p>If you have a promo code, Enter it here</p>
                    <div className='carditems-promobox'>
                        <input type='text' placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardItems