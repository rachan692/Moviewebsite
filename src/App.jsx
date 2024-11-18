
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header';

import Mainpage from './Nested/Mainpage';
import Firstpage from './Nested/Firstpage';
import Secondpage from './Nested/Secondpage';
import Call from './pages/Call';






// import Header from './components/Header';


const App = () => {


  const router = createBrowserRouter([

    {
      path:'/',
      element:<Home/>,
    children:[
 {
  path:'contact-page',
  element:<Call/>
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