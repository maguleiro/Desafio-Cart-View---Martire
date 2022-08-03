import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom"
import React, { useState, useEffect} from "react";
import detailedItems from "./utils/details";

const ItemDetailContainer = ({setAmountItems}) =>{
	const [item, setItem] = useState({});
	const {id} = useParams();


	const params = useParams();
	const promise = new Promise((res,rej) => {
	setTimeout(() => res(detailedItems),2000);
});
	useEffect(() => {
		promise.then((response) => {
			const foundItem = response.filter((item) => item.id == params.id);
			setItem(foundItem[0]);
		});
	}, []);
	return <ItemDetail setAmountItems={setAmountItems} item={item}/>;
};

export default ItemDetailContainer;