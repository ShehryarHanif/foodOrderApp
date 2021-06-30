import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";

import CartContext from "../../store/cart-context";

import classes from "./HeaderCartButton.module.css"

const HeaderCartButton = (props) => {
    const cartContext = useContext(CartContext);

    const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
    
    const numberOfCartItems = cartContext.items.reduce((currentNumber, item) => currentNumber + item.amount, 0);

    const buttonClasses = `${classes.button} ${buttonIsHighlighted ? classes.bump : ""}`;

    const { items } = cartContext; // Destructuring lets you get everything you need?

    useEffect(() => {
        if(cartContext.items.length === 0) {
            return;
        }

        setButtonIsHighlighted(true);

        const timer =setTimeout(() => {
            setButtonIsHighlighted(false);
        }, 300)

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button className={ buttonClasses } onClick={ props.onClick }>
            <span className={ classes.icon }>
                <CartIcon />
            </span>

            <span>
                Your Cart
            </span>
            
            <span className={ classes.badge }>
                { numberOfCartItems }
            </span>
        </button>
    );
}

export default HeaderCartButton;