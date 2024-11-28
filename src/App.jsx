
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header';
import Routelayout from './components/Routelayout';


const App = () => {


  const router = createBrowserRouter([

    {
      path:'/',
      element:<Routelayout/>,
    children:[
 {
  index:true,
  element:<Home/>
 },
 



  {
    path:'about-page',
    element:<About/>
  },
 
   <Outlet/>,
    
    ]
    },

  ]);
<App/>  
  return <RouterProvider router ={router}/>
  
}

export default App