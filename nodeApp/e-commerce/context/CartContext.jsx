"use client"
import { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ( props ) => {
  const [cart, setCart] = useState([]);
  const [fevt, setFevt] = useState([]);

//adding items into cart 
  const addToCart = (product) => {
    // The some method returns true if the callback function returns a truthy value for at least one element in the array. Otherwise, it returns false.
    const isProductHave = cart.some((item => item.id == product.id ))
    if( !isProductHave ){
      setCart([...cart, product]);
      alert('item added into your cart ! 😍 ')
    }else{
      alert('product is already in cart ! 😒 ')
    }
  };
//this is to delete from cart  
  const deletFromCart =(no)=>{
    setCart((product)=> product.filter(product =>product.id !== no))
  }

  //this is for adding item into fev
  const addToFev = (product) =>{
    const isFevAlreay = fevt.some((item)=>item.id == product.id ) //true
    if( !isFevAlreay){
      setFevt([...fevt, product]);
      alert('item added to fevt ! ❤')
    }else{
      alert('item is already in fev')
    }

    console.log(fevt)
  }
  //this is for removing item form fevt
  const removeHandeler = (no) =>{
    setFevt((product)=> product.filter(product=> product.id !== no ) )
  }


  return (
    //sending funtions and state into children for access
    <CartContext.Provider  value={{ cart,fevt, addToCart ,deletFromCart, addToFev,removeHandeler }}>
      {props.children}
    </CartContext.Provider>
  );
}; 

export const useCart = () => useContext(CartContext);
export const useFev = () => useContext(CartContext);
export default CartProvider