"use client"
import { mandata } from '@/data/men'
import Link from 'next/link'

const Details = () => {
  const styleimg = {
    'width' : '10rem',
    'height':'15rem',
    'objectFit':'contain',
    'cursor': 'pointer',
    'padding':'1rem',

  }
  const box = {
    'textAlign' : 'center',
    'border' : '0.01rem solid rgb(186, 186, 186)',
    'borderRadius' : '0.3rem',
    'margin' : '1rem',
    'width' : '20%',
    'padding' : '0.6rem',
    'textDecoration' : 'none',
    'color' : 'black',
    'textTransform':'capitalize',
  }
  const flex = {
    'display' : 'flex',
    'flexWrap' : 'wrap',
    'margin' : '1rem'
  }
  return (
     <>
    <h1 className='textstyle'>Men's Dress</h1>
    <div style={flex}>
        {
            mandata.map((item,index)=>{
                return (
                    <Link href={`/${item.id}`}className='boxshadow' style={box} key={index}>
                      <h2> {item.company} </h2>
                      <img src={item.img} style={styleimg} />
                      <h3> {item.model}  </h3> <span> {item.price} </span>
                    </Link>
                )
            })
        }
    </div>
    </>
  )
}

export default Details 