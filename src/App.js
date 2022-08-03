import logo from './logo.svg';
import './App.css';
import Promises from "./components/Promises";
import TitleLanding from "./components/TitleLanding";
import NavBar from "./components/NavBar";
import ItemListContainer2 from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { useState } from "react";
import UnmountExample from "./components/ExampleComponents/UnmountExample";
import Intercambiabilidad from "./components/ExampleComponents/Intercambiabilidad";
import CartProvider from "./components/contexts/CartContext";
import Test from "./components/Test";



function App() {

  const [amountItems, setAmountItems] = useState(0);
  return (
   <>
   <Test theme={"light"}/>
   <CartProvider>
   <BrowserRouter>
   <NavBar name={"menu"} />
   <div>
      <Link to={"category/bebidas"}> Mostrar Bebidas</Link>
   </div>

   <TitleLanding />
   <Routes>
    <Route index element ={<ItemListContainer2 />}/>
    <Route path= "/category/:name" element={<ItemListContainer2 />}/>
    <Route path="item/:id" element={<ItemDetailContainer/>}/>

    <Route path="*"
    element={
      <div className="error"> 
      <p> ERROR 404 
      <a href="/"> <button> volver </button> </a>  
      </p>
      </div> 
    }
    />
    <Route path="/cart" element={<div>cart page</div>}/>     
   </Routes>
    </BrowserRouter>
    </CartProvider>
   </>
  );
}

export default App;
