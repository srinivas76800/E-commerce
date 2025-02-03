'use client'
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { useState } from 'react';

const Cart = () => {
  const { cart, deletFromCart } = useCart();
  
  const removehandeler = (id) =>{
    deletFromCart(id)
  }
  
  return (
    <div className='container my-3'>
      <ul className='d-flex flex-wrap gap-2 justify-content-center align-items-start w-100'>
        {cart.length === 0 ?(<h1 className='text-center mx-5 my-5 p-5'>Your cart is emty </h1>) :(
          cart.map((item, index) => (
            <div className="card" style={{ width: "15rem" }} key={index}>
            <img src={item.img} style={{ width:'12em' }} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.company}</h5>
              <h5 className="card-title">{item.model}</h5>
              <span className='badge text-bg-primary fs-6' >{item.price} $</span>
              <p className="card-text">{item.description}</p>
              <Link href="/Order" className="btn btn-outline-success m-2">Order Now</Link>
              <button href="fv" className="btn btn-outline-danger m-2" onClick={()=>removehandeler(item.id)} >Remove</button>
            </div>
          </div>
        )))}
      </ul>
    </div>
  );
}

export default Cart;
