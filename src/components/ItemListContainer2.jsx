import React, { useState, useEffect, useParams } from "react";
import ItemsData from "./ItemsData";
import ItemList from "./ItemList";
import data from "./utils/data.json";


function ItemListContainer2(props){

const {name} = useParams ();
const [item, setItem] = useState([]);
const promise = new Promise((resolve) => {
	setTimeout(() => resolve(data),2000);
});
console.log("% Render ItemListContainer2","color:green");
console.log(item);


const getItem = () =>{
	promise.then((res) => {
		const products = res;
		if (name) {
			setItem(products.filter((product) => product.category == name));
		} else {
			setItem(products);
		}
	});
};

useEffect(() => {
	getItem();
}, [name]);



return (
	<div>
	<ItemList items={item}/>
	</div>
);
}

export default ItemListContainer2;