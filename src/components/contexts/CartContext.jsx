import React, { useState, createContext} from "react";

export const CartContext = createContext ();

const CartProvider = (props) =>{
	const [amountItems,setAmountItems] = useState(0);

	return ( 
		<CartContext.Provider value ={{amountItems, setAmountItems}}>
			{props.children}
		</CartContext.Provider>

	);
}

export default CartProvider;
