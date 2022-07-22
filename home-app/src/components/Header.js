import React from 'react';

import MiniCart from "CartApp/MiniCart";
import Login from "CartApp/Login";
import { Link } from "react-router-dom";

export default function Header({app}) {
    return (
        <header className="p-5 bg-blue-500 text-white text-3xl font-bold">
            <div className="flex">  
                <div className="flex-grow flex">
                    <Link to="/">Fidget Spinner World</Link>
                    <div class="mx-5">|</div> 
                    <Link to="/cart">Cart</Link>
                    {app && `| ${app.name}`}
                </div>
                <div className="flex-end relative">
                    <Login/>
                    <MiniCart/>
                </div>
            </div>
        </header>
    )
}