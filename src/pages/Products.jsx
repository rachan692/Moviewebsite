import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { EcommerceCard } from '../components/ECommerce';

const Products = () => {
  const[data,setData] = useState(); 
  const [load,setLoad] = useState(false);
  const[err,setErr] = useState();
  
  
  const play =async()=>{
    try {
      setLoad(true);
      const match = await axios.get('https://dummyjson.com/products',{
       
      });
      setLoad(false);
  
      setData(match.data);
      
    } catch (error) {
      setLoad(false);
  setErr(err.message);
    }
  }
  useEffect(()=>{
    play();
  },[])
  if(load){
  return  <h1>Loading...</h1>
  }
  if(err){
   return  <h1>{err}</h1>
  }
  console.log(data);
  return (
    <div className='grid grid-cols-3 gap-5 mt-4'>
      {data && data.products.map((product)=>{
        return <EcommerceCard key={product.id} product={product}/>
      })}
    </div>
  )
}

export default Products