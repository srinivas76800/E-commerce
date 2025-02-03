'use client'
import React from 'react'

const page = (props) => {
  return (
    <div className='d-flex align-items-center justify-content-center '>
    <div className='bg-light p-3 my-5 text-center w-75 rounded-4'>
    <form onSubmit={()=>alert('Order success')} >
        <h3 className='display-5'>Enter Details for your order</h3>
        <label htmlFor='name'>Name : </label>
        <input required type="text" id='name' className='rounded px-2 mx-1 my-2 border-0'/> <br/>
        <label htmlFor='mail'>Email : </label>
        <input required type="email" id='mail' className='rounded px-2 mx-1 my-2 border-0'/> <br/>
        <label htmlFor='pass'>Password : </label>
        <input required type="password" id='pass' className='rounded px-2 mx-1 my-2 border-0'/> <br/>
        <label htmlFor='Location'>Location : </label>
        <input required type="text" id='Location' className='rounded px-2 mx-1 my-2 border-0'/><br/>
        <label htmlFor='Address'>Address : </label>
        <input required type="text" id='Address' className='rounded px-2 mx-1 my-2 border-0'/><br/>
        <label htmlFor='Pincord'>Pincord : </label>
        <input required type="number" id='Pincord' className='rounded px-2 mx-1 my-2 border-0'/><br/>
        <label htmlFor='Options'>Options : </label>
        <select name="all" id="all-items" className="rounded border-0 px-1 py-0 mx-2">
            <option value="">-- Payment method --</option>
            <option value="phonepay">Phone pay</option>
            <option value="googlepay">Google Pay</option>
            <option value="Pay TM">Pay TM</option>
            <option value="Amazon pay">Amazon pay</option>
            <option value="cash">Cash on delivary</option>
        </select>  <br/>
        <button className='btn btn-outline-dark my-2 w-25'>Order Now</button> 
        <h1>{props.itemprice}</h1>
    </form>
    </div>
    </div>
  )
}

export default page