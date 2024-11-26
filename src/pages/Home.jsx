import { Card, List } from '@material-tailwind/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { SampleCard } from '../components/SampleCard';


const Home = () => {
  
const[data,setData] = useState(); 
const [load,setLoad] = useState(false);
const[err,setErr] = useState();


const play =async()=>{
  try {
    setLoad(true);
    const match = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    setData(match.data);
    setLoad(false);
  } catch (error) {
    setLoad(false);
setErr(true);
  }
}
useEffect(()=>{
  play();
},[])
if(load){
return  <h1>Loading...</h1>
}
if(err){
 return  <p>{err.message}</p>
}


  return (
    <div className='grid grid-cols-3 gap-5 mt-4 md:sm:flex'>
{data && data.categories.map((nap)=>{
return  <SampleCard key={nap.idCategory}
label={nap.strCategory}
image={nap.strCategoryThumb}
detail={nap.strCategoryDescription}/>

})}
    </div>
    

  )
}

export default Home