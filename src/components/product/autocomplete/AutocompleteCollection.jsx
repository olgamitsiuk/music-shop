import {AutocompleteItem} from "./AutocompleteItem"

export function AutocompleteCollection (props){
    const items = props.items;
    return (
        <ul className="autocompleteItemList">
            {
                items.map( item => 
                <AutocompleteItem key={item._id} item={item}></AutocompleteItem>
           )}
        </ul>
)
};