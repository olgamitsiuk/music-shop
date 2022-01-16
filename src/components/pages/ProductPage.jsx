import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import { getProductById  } from '../../api';

export function ProductPage (){
    const [product, setProduct] = useState({});
    const [isLoad, setIsLoad] = useState(false);
    const {id} = useParams();
    //console.log(id);

    useEffect( () => {
            getProductById(id).then(res => {
                    setProduct(res);
                    setIsLoad(true);
                    console.log(res);
                })
                .catch(err =>
                    console.log(err))
        },[id]);

    if (!isLoad) return (
        <div className="spinner-border" role="status">
            <span className="sr-only">Загрузка...</span>
        </div>
    );

    if (product) {
    return (
        <div className='container product-page'>
            <div className='row'>
            <div className="col-6 ">
                <img src={"http://localhost:3001" + product.image[0]} alt={product.name} />
            </div>
                <div className=" col-6 product-description">
                <h3>{product.name}</h3>
                <h3>{product.model}</h3>
                <p>{product.description}</p>
                <p className="price">{product.price_action ? product.price_action : product.price_normal} грн</p>
                </div>
            <div className="col-12">
                <h3>Характеристики</h3>
            </div>
                <div className='col-6'>
                <ul className='characteristics'>
                    {
                        product.characteristics.map( characteristic =>
                            <li>{characteristic.name}<span>{characteristic.value}</span></li>
                        )
                    }
                </ul>
                </div>
                <div className='col-6'>
                    <p>{product.description_full }</p>
                </div>
            </div>
        </div>
    );}
    else { return <h1>404 not found</h1>}
}