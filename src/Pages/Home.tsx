import React from 'react';
import { Product } from '../Components/Product';
import { ProductType } from '../Constants/Types/Product.type';

export function Home(props: {productList: Array<ProductType>}) {
    return (
        <div className="bg-white mb-4">
            <div>
                <div className="mx-auto flex max-w-2xl py-8 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-purple-900">Baking Good</h2>
                    <div className="hidden flex items-center lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
          <span className="bg-purple-100 inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-purple-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            <i className="fa-solid fa-cart-shopping"></i>
          </span>
          <span className="w-6 h-6 flex items-center bg-purple-900 text-white font-medium rounded-full justify-center text-xs ml-2">3</span>
        </div>
                </div>
            </div>
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-purple-900">Products</h2>
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {props.productList?.map((item,index) => <Product product={item} key={index}/>)}
                </div>
            </div>
        </div>
    )
}
