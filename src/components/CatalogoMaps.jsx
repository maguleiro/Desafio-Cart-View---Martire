//CLASE MAPS

import { useState } from "react";
import Item from "./Item";
import {useParams} from  'react-router-dom';


//map


const CatalogoMaps = () => {
	const productos = [{
		id: 1,
		name: "Fernet",
		precio: 500,
		img:"C:\Users\Usuario\Desktop\coderhouse\REACT\Desafio Promises - Martire\app\img\fernet.jpg",
	},
	{
		id:2,
		name:"Gin",
		precio: 450,
		img:"C:\Users\Usuario\Desktop\coderhouse\REACT\Desafio Promises - Martire\app\img\gin.jpg",
	},
	{
		id:3,
		name:"Jaggermeister",
		precio:800,
		img:"C:\Users\Usuario\Desktop\coderhouse\REACT\Desafio Promises - Martire\app\img\jaggermeister.jpg",
	},
	{
		id:4,
		name:"Vodka",
		precio:650,
		img:"C:\Users\Usuario\Desktop\coderhouse\REACT\Desafio Promises - Martire\app\img\vodka.jpg",
	},
	{
		id:5,
		name:"Sex on the beach",
		precio:600,
		img:"C:\Users\Usuario\Desktop\coderhouse\REACT\Desafio Promises - Martire\app\img\sotb.jpg",
	},
	{
		id:6,
		name:"Cerveza",
		precio:250,
		img:"C:\Users\Usuario\Desktop\coderhouse\REACT\Desafio Promises - Martire\app\img\cerveza.jpg",
	},
	];

	return(
	<>
	{productos.map( (producto) => {
		return <Item key={producto.id} name ={producto.name} precio ={producto.precio}/>;
	})}
	</>
	);
};

export default CatalogoMaps;