'use client'
import React, { useState } from 'react'

const page = ({userhandeler}) => {

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [confpassword, setConfpassword] = useState('')
    const [error, setError] = useState('')
    
    const formsub = (e) =>{
        e.preventDefault()

        if(password!==confpassword){
            setError(<div className='text-danger text-center fs-5'>password and conform password must be same</div>)
            return;
        }
        if(password.length < 8 ){
            setError(<div className='text-danger text-center fs-5'>password must be more then 8 charenters</div>)
            return;
        }
        setName('')
        setMail('')
        setPassword('')
        setConfpassword('')
        setError('')
        userhandeler(mail,password)
    }


    return (
        <form onSubmit={formsub}>
                <h1 className='text-center fs-1 py-2 my-2 display-2'>Account Login</h1>
        <div className=' py-5 d-flex justify-content-center'>
                <div className='rounded-3 border-3 bg-light text-white  w-50 h-100 d-flex justify-content-center align-items-center p-5 overflow-hidden rounded flex-column gap-2' >
                    <input
                        required
                        type="text"
                        placeholder='Enter Your Name here...'
                        className='rounded-3 border-1 border-dark px-2 py-1 w-50'
                        onChange={(e)=> setName(e.target.value)}
                        value={name}
                    />
                    <input
                        required
                        type="email"
                        placeholder='Enter Email here...'
                        className='rounded-3 border-1 border-dark px-2 py-1 w-50'
                        onChange={(e)=> setMail(e.target.value)}
                        value={mail}
                    />
                    <input
                        required
                        type="password"
                        placeholder='Enter Your password...'
                        className='rounded-3 border-1 border-dark px-2 py-1 w-50'
                        onChange={(e)=> setPassword(e.target.value)}
                        value={password}
                    />
                    <input
                        required
                        type="password"
                        placeholder='Conform password... '
                        className='rounded-3 border-1 border-dark px-2 py-1 w-50'
                        onChange={(e)=> setConfpassword(e.target.value)}
                        value={confpassword}
                    />
                    {error}
                    <input 
                        required
                        type='submit'
                        placeholder='submit'
                        className='btn btn-dark btn-outline-dark text-white w-50'
                    />    
                </div>
        </div>
            </form>
    )
}

export default page