import { useState } from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WidgetCart = ({amountItems}) => {
	return (
		<div className="ps-4">
			<FontAwesomeIcon icon={faShoppingCart} />
			<span className="ps-2">{amountItems}</span>
		</div>
	);
};

export default WidgetCart;