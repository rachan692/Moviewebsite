import axios from "axios"



const Home = () => {


  const getData = async () => {

    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      console.log(response.data);

    } catch (err) {

    }

  }

  getData();
  console.log('hello jee');





  return (
    <div>




    </div>
  )
}
export default Home