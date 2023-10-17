import CartWidget from './CartWidget';
import React from 'react';
import { Link , NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <section className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">MaPro</Link>
                <nav>
                <NavLink to="/" className="mr-3">Inicio</NavLink>
                <NavLink to="/category/electronics" className="mr-3">Electrónicos</NavLink>
                <NavLink to="/category/clothing" className="mr-3">Ropa</NavLink>
                <NavLink to="/category/jewelery" className="mr-3">Joyería</NavLink>
                <NavLink to="/cart" className="mr-3"><CartWidget /></NavLink>
                </nav>
            </div>
        </section>
    );
}

export default NavBar;