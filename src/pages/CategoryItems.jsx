import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
  } from "@material-tailwind/react";
const CategoryItems = () => {
    const {category} = useParams();
  const nav = useNavigate();
    const[data,setData] = useState(); 
const [load,setLoad] = useState(false);
const[err,setErr] = useState();


const play =async()=>{
  try {
    setLoad(true);
    const match = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php',{
        params:{
            c : category
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
 return  <p>{err.message}</p>
}
   console.log(data);
  return (
    <div>
 {data && <Card className="w-96">
 <List>
    {data.meals.map((meal)=>{
      console.log(meal)
      return    <ListItem
      onClick={()=> nav(`/item-detail/${meal.idMeal}`)} key={meal.idMeal}>
      <ListItemPrefix>
        <Avatar variant="circular" alt="candice"img  src={meal.strMealThumb} />
      </ListItemPrefix>
      <div>
        <Typography variant="h6" color="blue-gray">
          {meal.strMeal}
        </Typography>
   
      </div>
    </ListItem>
      
     
     
     
    })}
    </List>
       
      </Card>}
    </div>
  )
}

export default CategoryItems


   
 