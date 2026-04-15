import React, { useState } from 'react';
import "./ListWork.css";


function ListWork() {
    const [products, setProducts] = useState([
        {
            id: 1,
            firstName: "Product",
            lastName: "One"
        },
        {
            id: 2,
            firstName: "Product",
            lastName: "Two"
        },
        {
            id: 3,
            firstName: "Product",
            lastName: "Three"
        },
        {
            id: 4,
            firstName: "Product",
            lastName: "Four"
        },
        {
            id: 5,
            firstName: "Product",
            lastName: "Five"
        },
        {
            id: 6,
            firstName: "Product",
            lastName: "Six"
        }
    ]);

    console.log(products);
    const [favorites, setFavorites] = useState([]);
    const toggleFavorite = (product) => {
        const exists = favorites.find((fav) => fav.id === product.id);

        if (exists) {
            setFavorites(favorites.filter((fav) => fav.id !== product.id));
        } else {
            setFavorites([...favorites, product]);
        }
    };

    return (
        <div className="container">
            <ul className="product-list">
                {products.map((product) => (
                    <li key={product.id} className="product-card">
                        <p>Id: {product.id}</p>
                        <h3>{product.firstName}</h3>
                        <h3>{product.lastName}</h3>

                        <button
                            className="favorite-btn add-btn"
                            onClick={() => toggleFavorite(product)}
                        >
                            add to favorites
                        </button>
                    </li>
                ))}
            </ul>
            <hr />
            <div className="favorites">
                <h1>Favorites</h1>

                <ul className="product-list">
                    {favorites.map((product) => (
                        <li key={product.id} className="product-card">
                            <p>Id: {product.id}</p>
                            <h3>{product.firstName}</h3>
                            <h3>{product.lastName}</h3>

                            <button onClick={() => toggleFavorite(product)}>
                                remove from favorite
                            </button>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
}

export default ListWork;