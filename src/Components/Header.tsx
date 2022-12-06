import React from "react";
import { Cart } from "./Cart";

export function Header() {
    return (
        <div className="bg-purple-900 fixed top-0 w-full z-10">
            <div className="mx-auto flex items-center justify-between max-w-2xl md:py-8 md:px-4 py-4 px-4 lg:max-w-7xl lg:px-8">
                <h2 className="lg:text-3xl md:text-2xl text-xl font-bold tracking-tight text-purple-100">Baking Good</h2>
                <div className="flex items-center lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                    <Cart/>
                </div>
            </div>
        </div>
    )
}