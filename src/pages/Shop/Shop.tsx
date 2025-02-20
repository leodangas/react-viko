import GoBack from "../../components/GoBack.tsx";
import Wrapper from "../../components/Wrapper.tsx";
import {useState} from "react";
import ProductList from "./components/ProductList.tsx";
import Cart from "./components/Cart.tsx";

export interface Product {
    id: number;
    name: string;
}

export interface ProductInCart {
    id: number;
    name: string;
    amount: number;
}

export default function Shop() {
    const [products, ] = useState<Product[]>([
        {
            id: 1,
            name: "#1 Produktas"
        },
        {
            id: 2,
            name: "#2 Produktas"
        },
        {
            id: 3,
            name: "#3 Produktas"
        },
        {
            id: 4,
            name: "#4 Produktas"
        }
    ]);

    const [userProducts, setUserProducts] = useState<ProductInCart[]>([]);

    return (
        <main className={"page-shop"}>
            <Wrapper>
                <GoBack />
                <h1 className={"style-heading"}>Krepšelio sistema</h1>
                <div className={"grid"}>
                    <ProductList products={products} setUserProducts={setUserProducts} />
                    <Cart userProducts={userProducts} setUserProducts={setUserProducts} />
                </div>

            </Wrapper>
        </main>
    )
}