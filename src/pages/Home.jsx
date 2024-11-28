import { Button } from '@material-tailwind/react';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [data,setdata] = useState();
  const[page,setpage] = useState(1);
const getdata =async()=>{
try {
  const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated',{
  params:{
page:page
  },
  headers:{
Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWQ3MzY1MjExMDMzYWVlZGNkNmZlMzA4MDZlNTUxMiIsIm5iZiI6MTczMjcyMTAwMy45MzY2OTU4LCJzdWIiOiI2NzQ3MzY3ODY2YjlhNGY5M2M4NGRkMTgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.LciDKts8CwbGtzcA-mKAihMQigrvQlIAdmd6MJzQEy8',
// here in authorization we need to go to the website tmdb and in api we copy this code and we need to add bearer in link  
}
  });
  setdata(response.data);
} catch (error) {
  
}
}
useEffect(()=>{
window.scrollTo(0, 0);
  getdata()
},[page])    // This is a dependent array



console.log(data);
  return (
   <div>
   <div className='grid grid-cols-4 gap-5 p-4 shadow-2xl ' >
      {data && data.results.map((move)=>{
        return <div key={move.id} className='space-y-7 w-[300px] shadow-2xl'>
          <div className='p-4 '>
          <h1 className='font-bold text-2xl hover:underline'>{move.title}</h1>
          <img className='p-4 w-full' src={`https://image.tmdb.org/t/p/w500${move.poster_path}`} alt=""/>
          <p className='line-clamp-3'>{move.overview}</p>
          </div>

   
          </div>
          
      })}
   </div>

   {data && <div className='flex justify-center mt-3'>
    <div className='flex items-center gap-5 mb-5'>
    <Button  disabled = {page === 1} onClick={() => setpage((prev) => prev+1)} size='sm'color='pink'>Prev</Button>
<p className='font-bold text-lg'>{page}</p>

<Button size='sm' color='green' onClick={()=> setpage((prev) => prev+1)}>Next</Button>
</div>
   </div>}
   </div>
   )
   
}
export default Home