'use client'
import { useFev } from '@/context/CartContext'
import React from 'react'

const page = () => {

    const { fevt,removeHandeler } = useFev()

    const removFromFevt = (id) =>{
      removeHandeler(id)
    }

  return (
    <ul className='d-flex flex-wrap gap-2 justify-content-center align-items-start w-100 my-3'>
    {fevt.length === 0 ?(<h1 className='text-center mx-5 my-5 p-5'>Your fev is emty </h1>) :(
      fevt.map((item, index) => (
      <div className="card" style={{ width: "15rem" }} key={index}>
        <img src={item.img} style={{ width:'12rem' }} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.company}</h5>
          <h5 className="card-title">{item.model}</h5>
          <span className='badge text-bg-primary fs-6' >{item.price} $</span>
          <button href="fv" className="btn btn-outline-danger mx-2" onClick={()=>removFromFevt(item.id)} >Remove</button> 
        </div>
      </div>
    )))}
  </ul>
  )
}

export default page 