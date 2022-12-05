import React from 'react';
import { ProductType } from '../Constants/Types/Product.type';

export function Product(props: {product: ProductType}) {
    return (
    <>
        <div className="relative">
            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                <img src={props?.product?.url} alt={props?.product?.title} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-purple-900 font-medium">
                        <span aria-hidden="true" className="absolute inset-0"></span>
                        {props?.product?.title}
                    </h3>
                    <p className="mt-1 text-sm text-purple-900 font-light">{props?.product?.subtitle}</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center text-purple-900">
                <p className="font-normal text-xl my-2">&#8377; {props?.product?.price}</p>
                <button className="px-4 py-2 uppercase rounded-full border-2 border-purple-100 bg-purple-100 text-purple-900 focus:outline-none text-xs font-medium cursor-pointer">
                Add to cart
                </button>
            </div>
        </div>
    </>
    )
}