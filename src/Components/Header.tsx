import React from "react";
import { Cart } from "./Cart";

export function Header() {
    return (
        <div className="bg-purple-900 fixed top-0 w-full z-10">
            <div className="mx-auto flex items-center justify-between max-w-2xl py-8 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-purple-100">Baking Good</h2>
                <div className="flex items-center lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                    <Cart/>
                </div>
            </div>
        </div>
    )
}