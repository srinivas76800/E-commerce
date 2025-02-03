import React from 'react'
import { kichendata } from '../data/kichen'
import Link from 'next/link'
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io"

const Products = () => {

    const fiveimg = kichendata.slice(0, 5)

    return (
        <>
            <Link href='/KinchenDetails' className='textstyle'>Kichen's </Link>
            <div className='boxitems'>
                {fiveimg.map((item, index) => {
                    return (
                        <Link href={`${item.id}`} className='card m-2 boxshadow'  key={index}>
                                <img src={`${item.img}`} className="card-img-top" style={{width: 13 + 'rem', height:'15rem' }} alt="..."/>
                                <div className='text-center text-warning'>
                                    { '3'== item.rating  ? <div><IoIosStar/><IoIosStar/><IoIosStar/> <IoIosStarOutline/><IoIosStarOutline/> </div>  : '' }
                                    { '4'== item.rating  ? <div><IoIosStar/><IoIosStar/><IoIosStar/> <IoIosStar/><IoIosStarOutline/> </div>  : '' }
                                    { '5'== item.rating  ? <div><IoIosStar/><IoIosStar/><IoIosStar/> <IoIosStar/><IoIosStar/> </div>  : '' }
                                </div> 
                                <div className="card-body">
                                    <p className="card-text text-decoration-none  text-center fw-2">{item.model}</p>
                                </div>
                        </Link>
                    )
                })
                }
            </div>
        </>
    )
}

export default Products