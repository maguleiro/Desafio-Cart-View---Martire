import React from "react";

function ItemList(props){
	console.log("Render ItemList". props.prod)
	return (
		<>
		{console.log(props.prod[0])}
		<div>ItemList</div>
		</>
	)
}

export default ItemList;