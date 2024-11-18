import axios from "axios"
import Routelayout from "../components/Routelayout";



const Home = () => {

const getdata=async() =>{
  try {
  
  } catch (error) {
    
  }
}
 
axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
.then((res)=>{
  console.log(res.data);
}).catch((err)=>{
  console.log(err);
});


  return (
    <div>
<Routelayout/>



    </div>
  )
}
export default Home