import Link from 'next/link'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsSmartwatch } from 'react-icons/bs'
import { FaRegHeart, FaTv } from 'react-icons/fa'
import { FiSmartphone } from 'react-icons/fi'
import { GiForkKnifeSpoon, GiLaptop, GiTravelDress } from 'react-icons/gi'
import { IoSearchSharp, IoShirtOutline } from 'react-icons/io5'
import { MdOutlineToys } from 'react-icons/md'
import { VscAccount } from 'react-icons/vsc'

const page = () => {
  return (
        <>
    <div className='h-100 w-100 bg-light text-dark text-center d-flex flex-column gap-3  fw-semibold p-3 text-capitalize fs-2 justify-content-center align-items-center display-6 '>
    <Link href='/MobleDetails' className='mx-1 hover navlistyle'><FiSmartphone size={24}/> mobile</Link>
      <Link href='/ComputerDetails' className='mx-1 hover navlistyle'><GiLaptop  size={24}/> computers</Link>
      <Link href='/WatchDetails' className='mx-1 hover navlistyle'><BsSmartwatch size={24}/> watch</Link> 
      <Link href='/TvDetail' className='mx-1 hover navlistyle'><FaTv size={24}/> TV</Link >
      <Link href='/ToysDetails' className='mx-1 hover navlistyle'><MdOutlineToys size={24}/> Toy's</Link>
      <Link href='/KichenDetails' className='mx-1 hover navlistyle'><GiForkKnifeSpoon size={24}/> kichen</Link >
      <Link href='/WomenDetails' className='mx-1 hover navlistyle'><GiTravelDress size={24} /> women</Link>
      <Link href='/MenDetails' className='mx-1 hover navlistyle'><IoShirtOutline size={24} /> Men</Link>
      {/* <div className='icons'>
        {/* <Link href='' className=' text-decoration-none text-black mx-2 hover'><input className='px-2 border-1 rounded mx-1 bg-transparent ' type="text" placeholder='Search items here...' /><IoSearchSharp size={30}/></Link > 
        <button type="button" className="btn btn-light "><i className="bi bi-geo-alt-fill"></i>Location</button>
        <Link  href='/Login' className='text-decoration-none text-black mx-1 hover'> <button className='btn btn-light'> <VscAccount size={30}/></button> </Link>
        <Link href='/Cart' className='text-decoration-none text-black mx-1 hover'> <button className='btn btn-light'> <AiOutlineShoppingCart size={30}/></button> </Link >
        <Link href='/Fevt' className='text-decoration-none text-black mx-1 hover'> <button className='btn btn-light'> <FaRegHeart size={30}/></button> </Link >
      </div> */}
    </div>
    </>
  )
}

export default page