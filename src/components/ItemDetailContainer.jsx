import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
    const { id } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => setProduct(data));
    }, [id]);

    return (
        <div className="container mx-auto mt-5 p-5 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold">{product.title}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-2xl font-bold">${product.price}</p>
        </div>
    );
}

export default ItemDetailContainer;