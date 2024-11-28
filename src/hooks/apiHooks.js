// import axios from "axios";
// import { useEffect, useState } from "react";

import axios from "axios";
import { useEffect, useState } from "react";

export const useApihooks =(apiUrl,params)=>{
    const[data,setData] = useState(); 
const [load,setLoad] = useState(false);
const[err,setErr] = useState();


const play =async()=>{
  try {
    setLoad(true);
    const match = await axios.get(apiUrl,{params:params});
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

return[data,load,err];

}














