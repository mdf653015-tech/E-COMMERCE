import { useContext } from 'react';
import './CartItem.css'
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../Assests/cart_cross_icon.png'

const CartItem=()=>
{
    const {getTotalCartAmount,totalAmount,all_product,cartItems,removeFromCart}=useContext(ShopContext);
    return(
        <div className="cartitems">
            <div className='cartitems-formate-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
   {all_product.map((e)=>{
    if(cartItems[e.id]>0)
    {
        return(
            <div >
                <div className='cartitems-format cartitems-formate-main'>
                    <img className='carticon-product-icon' src={e.image}  alt="" />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <p> ${e.new_price*cartItems[e.id]}</p>
                    <img className='carticon-reome-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                </div>
                <hr />
            </div>
   )}
   return null

   })}
   <div className='cartitems-down'>
    <div className='cartitems-total'>
        <h1>cart Totals</h1>
        <div>
            <div className='cartitems-total-items'>
                <p>subtotal</p>
                <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div  className='cartitems-total-items'>
                <p>Shiping Free</p>
                <p>Free</p>
           
            <hr />
             <div  className='cartitems-total-items'>
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
             </div>
        </div>
        <button>PROCEED TO CHECKOUT</button>
    </div>
     </div>
    <div className='cartitems-promocode'>
        <p>if you hav a promo code, Enter it here </p>
        <div className='cartitems-promobox'>
            <input type="text" placeholder='promo code' />
            <button>Submit</button>
        </div>
    </div>
   </div>
    </div>
    
       
    )
}
export default CartItem;