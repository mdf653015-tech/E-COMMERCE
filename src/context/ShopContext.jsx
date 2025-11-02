import { createContext, useState } from "react";
import all_product from "../components/Assests/all_product";
import Item from "../components/Item/Item";

export const ShopContext = createContext(null);
const getDefaultCart=()=>{
  let cart={};
  for(let index=0; index < all_product.length+1;index++)
  {
    cart[index]=0;
  }
  return cart;
}

const ShopContextProvider = ({ children }) => {
   const [cartItems,setCartItems]=useState(getDefaultCart());
 

 const addToCart =(itemId)=>
 {
  setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
 }
 console.log(cartItems);
  const removeFromCart =(itemId)=>
 {
  setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
 }
 const getTotalCartAmount=()=>{
 let totalAmount=0
 for(const item in cartItems)
 {
  if(cartItems[item]>0)
  {
    let itemInfo=all_product.find((product)=>product.id===Number(item))
    totalAmount +=itemInfo.new_price * cartItems[item]
  }
  

 }
 return totalAmount;

 }

 const getTotalAmount=()=>{
  let totalItem=0;
  for(const item in cartItems)
  {
    if(cartItems[item]>o)
    {
      totalItem +=cartItems[item]
    }
  }
  return totalItem
 }

  const contextValue = {getTotalAmount, getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;


