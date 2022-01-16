import {useEffect, useState} from "react";
import {getCategories} from "../../../api";
import {CatalogItem} from "./CatalogItem";
import '../../../css/catalog.css';


export function Catalog (){
    const [categories, setCategories] = useState([]);
    const [isLoad, setIsLoad] = useState(false);

    useEffect( () => {
            getCategories().then(res => { setCategories(res); setIsLoad(true) })
                .catch(err =>
                    console.log(err))},
        []);

    if (!isLoad) return (
        <div className="spinner-border" role="status">
            <span className="sr-only">Загрузка...</span>
        </div>
    );
    let key = 0;
    return (<>
        <h1>Каталог</h1>
        <div className='catalog-list' key="catalog_list"  >
            {categories.map(category =>
                <CatalogItem key={"category_" + (key++)} item={category}></CatalogItem>
            )}
        </div></>
    );
}