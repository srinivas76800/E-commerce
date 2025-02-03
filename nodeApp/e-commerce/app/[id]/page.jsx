"use client";
import { useParams } from 'next/navigation';
import { data } from '@/data/alldata';
import { FaCartPlus } from "react-icons/fa";
import { TbBrandCashapp } from "react-icons/tb";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { useCart  } from '@/context/CartContext';
import { useFev } from '@/context/CartContext'
import Link from 'next/link';

const MobileDetails = () => {
  const { id } = useParams(); //this is for accessing the url to match the id
  const alldata = data.find(item => item.id === id);
  const { addToCart } = useCart();
  const { addToFev } = useFev();

  const handleAddToCart = () => {
    //this function add item into cart
    addToCart(alldata);
  };

  const handleAddToFev = () =>{
    //this function add item into fevt
    addToFev(alldata);
  }

  return (
    <>
    <div className='detailsbox'>
      <div className='details1'>
        <img src={alldata.img} style={{width: '13rem', height:'15rem' }} alt={alldata.model} />
      </div>
      <div className='details2'>
        <h1>{alldata.company}</h1>
        <h2>{alldata.model}</h2>
        <p>{alldata.price}</p>
        <p>{alldata.description}</p>
        <button
          className='btn btn-outline-dark m-2'
          onClick={handleAddToCart}
        >
        <FaCartPlus/> Add to cart
        </button>
        <button
          className='btn btn-outline-dark m-2'
          onClick={handleAddToFev}
        >
        <FaHeartCirclePlus/> Add to Fev
        </button>
        <Link 
          href='/Order'
          itemprice={alldata.price}
          className='btn btn-outline-dark font-semibold m-2'>
          <TbBrandCashapp/> ORDER NOW
        </Link>
      </div>
    </div>
    </>
  );
};

export default MobileDetails;