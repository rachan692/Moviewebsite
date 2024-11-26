import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const ItemDetails = () => {
    const {id} = useParams();
    console.log(id);

    const[data,setData] = useState(); 
    const [load,setLoad] = useState(false);
    const[err,setErr] = useState();
    
    
    const play =async()=>{
      try {
        setLoad(true);
        const match = await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?',{
            params:{
                i : id
            }
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
      //  console.log(data);

    return (
    <div>
      {data && data.meals.map((meal)=>{
        console.log(meal)
return <div   key={meal.idMeal} className='w-[400px] shadow-xl m-auto mt-4 '>
  <h1 className='text-5xl font-bold text-center'>{meal.strCategory}</h1>
  <img className='w-full'  src={meal.strMealThumb} alt="/"></img>
<p className='p-5 text-sm font-bold '>{meal.strInstructions}</p>

  </div>
      })}
    </div>
  )
}

export default ItemDetails


