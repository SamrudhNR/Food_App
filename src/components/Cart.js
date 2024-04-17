import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utils/cartSlice';
import CartItems from './CartItems';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className='text-center mx-auto '>
        {cartItems.length==0? <h3 className='p-2 my-3 font-semibold'>Empty Cart!!</h3> :cartItems.map((item)=> <CartItems item={item} /> )}
        <div className="p-4 w-[100%] h-[100%]">
                <button className='bg-white shadow-lg rounded-lg px-[30px] py-1.5 mx-[8px] text-green-600 font-bold' 
                onClick={() => {
                    dispatch(clearCart())
                }}>Clear Cart</button>
            </div>
    </div>
  )
}

export default Cart;