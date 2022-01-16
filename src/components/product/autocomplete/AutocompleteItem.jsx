import {Link} from "react-router-dom";

export function AutocompleteItem (props){
    return (
        <li>
            <Link to={`/product/${props.item._id}`}>{props.item.name + ' ' + props.item.model} </Link>
            <img src={"http://localhost:3001" + props.item.image[0]} width="50px" alt={props.item.name}/>
        </li>
    )

}