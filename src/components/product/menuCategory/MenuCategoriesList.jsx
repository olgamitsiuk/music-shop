import  { useEffect, useState } from "react";
import { MenuCategoryItem } from "./MenuCategoryItem";
import { getCategories } from '../../../api';

export function MenuCategoriesList (){
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
                <MenuCategoryItem key={"category_" + (key++)} item={category}></MenuCategoryItem>
            )}
            <hr/>
            <li className='phone-adaptive'>+38 (050) 194 51 16</li>
            <li><a href="!#" className='menu-header-adaptive'> Доставка и оплата</a></li>
            <li><a href="!#" className='menu-header-adaptive'>Сервис-центр</a></li>
            <li><a href="!#" className='menu-header-adaptive'>Контакты</a></li>
            <li><a href="!#" className='menu-header-adaptive'>Акции</a></li>
        </ul>
    );
}