import React from "react"

export function Cart() {
    return (
        <><span className="bg-purple-100 inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-purple-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            <i className="fa-solid fa-cart-shopping"></i>
        </span>
        <span className="w-6 h-6 px-3 py-1.5 h-9 w-9 flex items-center bg-purple-100 text-purple text-base font-semibold rounded-full justify-center text-xl ml-2">3</span></>
    )
}