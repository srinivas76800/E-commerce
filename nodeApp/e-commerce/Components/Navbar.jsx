"use client";
import Link from 'next/link';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiMenuBurger } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const page = () => {
 
  return (
    <>
    <nav className='z-1 navbarbox nav  d-flex justify-content-between align-items-center p-3 fw-bold'> 
      <div>
        <Link href='/Menu' className='menubox text-decoration-none text-black hover'><CiMenuBurger size={22}/>Menu</Link>
      </div>
      <div>
        <Link  href='/'  className='text-black text-light fs-4'>MESUDA STORE</Link>
      </div>
      <div className=''>
        <Link href='' className='icons text-decoration-none text-black mx-2 hover'><input className='px-2 border-1 rounded mx-1 bg-transparent ' type="text" placeholder='Search items here...' /><IoSearchSharp size={30}/></Link >
        <Link  href='/Login' className='text-decoration-none text-black mx-1 hover'> <button className='btn btn-light'> <VscAccount size={30}/></button> </Link>
        <Link href='/Cart' className='text-decoration-none text-black mx-1 hover'> <button className='btn btn-light'> <AiOutlineShoppingCart size={30}/></button> </Link >
        <Link href='/Fevt' className='text-decoration-none text-black mx-1 hover'> <button className='btn btn-light'> <FaRegHeart size={30}/></button> </Link >
      </div>
    </nav>
    </>
  )
}
export default page