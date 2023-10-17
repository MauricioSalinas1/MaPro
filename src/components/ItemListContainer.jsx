import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function ItemListContainer() {
    const { category } = useParams();
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch(`https://fakestoreapi.com/products${category ? `?category=${category}` : ''}`)
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error:', error));
    }, [category]);

    return (
        <div className="container mx-auto mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
                <div key={product.id} className="bg-white p-5 rounded-lg shadow-md">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="mb-4 w-48 h-48"
                    />
                    <h3 className="text-xl font-bold">{product.title}</h3>
                    <p className="text-gray-600">{product.description}</p>
                    <p className="text-2xl font-bold">${product.price}</p>
                    <Link to={`/item/${product.id}`} className="text-blue-500">Ver detalles</Link>
                </div>
            ))}
        </div>
    );
}

export default ItemListContainer;