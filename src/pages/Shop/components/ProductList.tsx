import {Product, ProductInCart} from "../Shop.tsx";
import ProductItem from "./ProductItem.tsx";
import React, {SetStateAction} from "react";

interface ProductListInterface {
    products: Product[];
    setUserProducts: React.Dispatch<SetStateAction<ProductInCart[]>>
}
export default function ProductList({products, setUserProducts} : ProductListInterface) {
    return (
        <div className={"shop"}>
            {products.map(product => <ProductItem product={product} setUserProducts={setUserProducts}/>)}
        </div>
    )
}