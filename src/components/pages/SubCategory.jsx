import React, { useEffect, useState }  from 'react';
import { useParams } from "react-router-dom";
import {getProductsBySubCategoryName} from '../../api';
import {ProductCard} from "../product/productCard/ProductCard";


export function SubCategory () {
    const [products, setProducts] = useState([]);
    const {subCategoryName} = useParams();
    console.log(subCategoryName)

    useEffect(() => {
        getProductsBySubCategoryName(subCategoryName).then(res => {
            setProducts(res);
            //setIsLoad(true);
            console.log(res);
        })
            .catch(err =>
                console.log(err))
    },[subCategoryName]);

    return <div className='container'>

        <div className='product-list'>
        {
            products.map(product =>
                <ProductCard product={product}/>)
        }
    </div></div>
}


