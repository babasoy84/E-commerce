import React, { createContext } from "react";
import all_product from '../Components/Assets/all_product'
import { useState } from "react";


export const ShopContext = createContext(null)

const getDefaultCard = () => {
    let card = {};
    for (let index = 0; index < all_product.length+1; index++) {
        card[index] = 0;
    }
    return card
}

function ShopContextProvider(props) {

    const [cardItems, setCardItems] = useState(getDefaultCard());

    const addToCard = (itemId) => {
        setCardItems((prev) => ({...prev,[itemId]:prev[itemId]+1}));
    }

    const removeFromCard = (itemId) => {
        setCardItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))
    }

    const getTotalCardAmount = () => {
        let totalAmount = 0;
        for(const item in cardItems)
        {
            if(cardItems[item] > 0)
            {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cardItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCardItems = () => {
        let totalItem = 0;
        for(const item in cardItems)
        {
            totalItem += cardItems[item];
        }
        return totalItem
    }

    const contextValue = {getTotalCardItems, getTotalCardAmount, all_product, cardItems, addToCard, removeFromCard};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;