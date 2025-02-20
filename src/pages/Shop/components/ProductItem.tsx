import {Product, ProductInCart} from "../Shop.tsx";
import React, {SetStateAction} from "react";

interface ProductItemInterface {
    product: Product | ProductInCart;
    hideAddToCart?: boolean;
    setUserProducts?: React.Dispatch<SetStateAction<ProductInCart[]>>
    showAmount?: boolean;
    showRemoveFromCart?: boolean;
}
export default function ProductItem({product, hideAddToCart, setUserProducts, showAmount, showRemoveFromCart} : ProductItemInterface) {
    const addToCart = () => {
        if (!setUserProducts) return;

        setUserProducts(userProducts => {
            const existingProduct = userProducts.find(p => p.id === product.id);

            if (existingProduct) {
                return userProducts.map(p =>
                    p.id === product.id ? { ...p, amount: p.amount + 1 } : p
                );
            } else {
                return [...userProducts, { ...product, amount: 1 }];
            }
        });
    };

    const removeFromCart = () => {
        if (!setUserProducts) return;

        setUserProducts(userProducts => {
            const existingProduct = userProducts.find(p => p.id === product.id);

            if (!existingProduct) return userProducts;


            if (existingProduct.amount > 1) {
                return userProducts.map(p =>
                    p.id === product.id ? { ...p, amount: p.amount - 1 } : p
                );
            } else {
                return userProducts.filter(p => p.id !== product.id);
            }
        });
    };



    return (
        <div className={"component-productItem"}>
            <div className={"name"}>{product.name}</div>
            {!hideAddToCart ?
                <button type={"button"} className={"style-button purple"} onClick={addToCart}>Pridėti į krepšelį</button>
                : null
            }
            {showAmount ? <div className={"amount"}>Kiekis: {product.amount}</div> : null}
            {showRemoveFromCart ?
                <button
                    type={"button"} className={`remove`}
                    onClick={removeFromCart}
                >
                    <img src={"/images/close-x.svg"} />
                </button>
                : null
            }
        </div>
    )
}