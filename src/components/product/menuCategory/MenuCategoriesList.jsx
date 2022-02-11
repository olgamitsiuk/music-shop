import  { useEffect, useState } from "react";
import { MenuCategoryItem } from "./MenuCategoryItem";
import { getCategories } from '../../../api';
import {Link} from "react-router-dom";

export function MenuCategoriesList (props){
    const [categories, setCategories] = useState([]);

    useEffect( () => {
            getCategories().then(res => { setCategories(res); })
                .catch(err =>
                    console.log(err))},
        []);

    let key = 0;
    return (
        <ul className='categories-list' key="category_list"  >
            {categories.map(category =>
                <MenuCategoryItem key={"category_" + (key++)} item={category} close={props.close}/>
            )}
            <hr/>
            <li className='phone-adaptive'>+38 (050) 194 51 16</li>
            <li><Link to='/delivery' className='menu-header-adaptive'> Доставка и оплата</Link></li>
            <li><Link to='/blog' className='menu-header-adaptive'>Блог</Link></li>
            <li><Link to='/contacts' className='menu-header-adaptive'>Контакты</Link></li>
            <li><Link to='product/sale' className='menu-header-adaptive'>Акции</Link></li>
        </ul>
    );
}