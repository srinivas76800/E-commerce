'use client'
import React, { useState } from 'react'
import Loading from '@/Components/Loading'
import Account from '@/app/Account/page'


const page = () => {
    const [userlogin, setUserlogin] = useState(null)

    const loginfunction = (email,password) =>{
      if(email=='vivekvemunuri15@gmail.com'&&password == '1234567890' ){
        console.log(email,'email correcet',password,'password correcet')
        setUserlogin(email,password)
        
        alert('Login success ✅')
        return
      }else{
        alert('invalid detwrong ❌');
        return
      }
    }
  
  return (
    <div>
        { !userlogin ? <Account userhandeler={loginfunction} /> : <><Loading/></> }
    </div>
  )
}

export default page