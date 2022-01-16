import React, { useEffect, useState }  from 'react';
import {Link} from "react-router-dom";
import {Preloader} from "../../layouts/Preloader";

export function CategoryHeader (props) {
    return <div className='category-header'>

        {!props.category.length ? (<Preloader/>) :
        (<>
        <h1>{props.category[0].name}</h1>
        <ul className="category-list" key={props.category[0].name} >
        {
            props.category[0].subCat.map(subCat =>
            <li key={subCat.name}><Link to={`/category/${props.category[0].nameStr}/${subCat.nameStr}`} >{subCat.name}</Link> </li>)
        }
        </ul><hr/></>)}
    </div>
}