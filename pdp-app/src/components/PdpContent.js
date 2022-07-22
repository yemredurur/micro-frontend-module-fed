import React , { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";
import { getProductsById, currency } from 'HomeApp/products';

import placeAddToCart from "AddToCartApp/placeAddToCart";

export default function PdpContent() {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    
    useEffect(() => {
        if (id) {
            getProductsById(id).then(setProduct);
        } else {
            setProduct(null);
        }
        
    },[id])

    const addToCart = useRef(null);

    useEffect(() => {
        if (addToCart.current) {
            placeAddToCart(addToCart.current, product.id);
        }
    }, [product]);
    
    if (!product) return null;
    return (
        <div className="grid grid-cols-2 gap-5">
            <div>
                <img src={product.image} alt={product.name} />
            </div>   
            <div> 
                <div className="flex">
                    <h1 className="flex-grow font-bold text-3xl">{product.name}</h1>
                    <div className="flex-end font-bold text-3xl">
                        {currency.format(product.price)}
                    </div>
                    
                </div>
                <div ref={addToCart}></div>
                <div className="mt-10">{product.description}</div>
                <div className="mt-10">{product.longDescription}</div>
            </div>
        </div>
    )
}