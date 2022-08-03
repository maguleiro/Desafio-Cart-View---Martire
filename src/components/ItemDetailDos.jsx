const ItemDetailDos = ({ item }) => {
	const {title, price, stock, pictureUrl, id, discount} = item 
	return(

		<div className="card" style={{ width:"15rem" }}>
			<img className="card-img-top" src="{pictureUrl}" alt="Card in ">
			<div className="card-body d-flex flex-column justify-content-center">
			<h5 className="card-title">{title}</h5>
			<p className="card-text">{`${stock} units avaiable`}</p>
			<p className="card-text">{`$${
				(price * discount) / 100
			}| width a % discount!`}</p>	
			</div>
		</div>
	);
};

export default ItemDetailDos;