'use client'
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Account from '@/app/Account/page'
import Loading from '@/Components/Loading'
import Navbar from '@/Components/Navbar'
import Footer from "@/Components/Footer";
import CartProvider from '@/context/CartContext'
 

const page = () => {

 

  return (
    <div>

      <CartProvider>
            <Loading/>
      </CartProvider>
    </div>
  )
}
export default page 