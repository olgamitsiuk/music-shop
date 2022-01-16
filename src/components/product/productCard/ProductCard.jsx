import {Link} from "react-router-dom";
import '../../../css/product-card.css'

export function ProductCard (props){
    return (
       <Link to={`/product/${props.product._id}`} className="product-card" >
        <img src={"http://localhost:3001" + props.product.image} className="card-img-top" alt={props.product.name}/>
            <div className="product-card-body">
                <p>{props.product.name}</p>
                <p >{props.product.model}</p>
            </div>
    </Link>
    )
}