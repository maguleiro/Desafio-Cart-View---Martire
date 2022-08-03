import React, { useState, useEffect, useParams } from "react";
import ItemsData from "./ItemsData";
import ItemList from "./ItemList";
import data from "./utils/data.json";
import Spinner from "./Spinner";

function ItemListContainer2(props){

const {name} = useParams ();
const [items, setItems] = useState([]);
const [loading, setLoading] = useState(false);
const promise = new Promise((resolve) => {
	setTimeout(() => resolve(data),2000);
});

useEffect(() => {
	setLoading(true);
	promise.then((res) =>{
		const products = res;
		if (name) {
			setItems(products.filter((product) => product.category ==name ))
		} else {
			setItems(products);
		}
		setLoading(false);
	});
	
}, [name]);

if(loading){
	return <Spinner />
}

return (
	<div>
	<ItemList items={items}/>
	</div>
);
}

export default ItemListContainer2;