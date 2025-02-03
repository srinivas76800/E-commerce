import React from 'react'
// import { useContext } from 'react'

const Footer = () => {
  // const example = useContext(cartContext)
  return (
    <>
    {/* <h1 className='text-center bg-gray-500'>Hello from footer</h1> */}
{/* {example} */}
    <div className='footerdiv fw-semibold p-3 text-capitalize bg-light d-flex justify-content-around text-decoration-none mt-5 w-100 '>
        <ul>
            <li className='fw-bold'>about us</li>
            <li>contact us</li>
            <li>report us</li>
            <li>product complain</li>
            <li>wrong product</li>
        </ul>
        <ul>
            <li className='fw-bold'>join us</li>
            <li>deals with us</li>
            <li>community</li>
            <li>make production</li>
            <li>repair</li>
        </ul>
        <ul>
            <li className='fw-bold'>colaborat us</li>
            <li>join with industy</li>
            <li>jobs</li>
            <li>part time</li>
            <li>full time</li>
        </ul>
    </div>
    </>
  )
}

export default Footer