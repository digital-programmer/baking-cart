import React from 'react';
import { Header } from '../Components/Header';
import { ProductCatalogue } from '../Components/ProductCatalague';
import { ProductType } from '../Constants/Types/Product.type';
import { Spacer } from '../Utils/Spacer';

export function Home(props: {productList: Array<ProductType>}) {
    return (
        <div className="mb-4">
            <Header/>
            <Spacer/>
            <ProductCatalogue productList={props.productList}/>
        </div>
    )
}
