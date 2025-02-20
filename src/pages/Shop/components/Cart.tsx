import {ProductInCart} from "../Shop.tsx";
import ProductItem from "./ProductItem.tsx";
import React, {SetStateAction} from "react";

interface CartInterface {
    userProducts: ProductInCart[];
    setUserProducts: React.Dispatch<SetStateAction<ProductInCart[]>>

}

export default function Cart({userProducts, setUserProducts} : CartInterface) {
    return (
        <div className={"cart"}>
            {userProducts.length === 0 ?
                <div className={"empty"}>Krepšelis tuščias</div>
                :
                userProducts.map(product => <ProductItem product={product} setUserProducts={setUserProducts} showAmount={true} hideAddToCart={true} showRemoveFromCart={true} />)
            }
        </div>
    )
}