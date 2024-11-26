import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const ProductDetail = () => {
    const{id} = useParams();
    const[data,setData] = useState(); 
    const [load,setLoad] = useState(false);
    const[err,setErr] = useState();
    
    
    const play =async()=>{
      try {
        setLoad(true);
        const match = await axios.get(`https://dummyjson.com/products/${id}`,{
         
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
    <div></div>
  )
}

export default ProductDetail