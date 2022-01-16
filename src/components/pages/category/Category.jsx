import React, { useEffect, useState }  from 'react';
import { useParams } from "react-router-dom";
import {getProductsByCategoryName} from '../../../api';
import {getCategoryByName} from '../../../api';
import {CategoryHeader} from "./CategoryHeader";
import {CategoryProductsList} from "./CategoryProductsList";
import '../../../css/category.css';

export function Category () {
    const [category, setCategory] = useState({});
    const [products, setProducts] = useState([]);
    const {categoryName} = useParams();

    useEffect(() => {
        getCategoryByName(categoryName).then(res => {
            setCategory(res);
            console.log(res)
            //setIsLoad(true);
           })
            .catch(err =>
                console.log(err))
    },[categoryName]);

    useEffect(() => {
        getProductsByCategoryName(categoryName).then(res => {
                setProducts(res);
                //setIsLoad(true);
            })
                .catch(err =>
                    console.log(err))
    },[categoryName]);

    return  <div className='container'>
        <CategoryHeader category={category}/>
        <CategoryProductsList products={products}/>
    </div>
}


