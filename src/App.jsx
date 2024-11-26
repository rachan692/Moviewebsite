
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header';
import Routelayout from './components/Routelayout';
import CategoryItems from './pages/CategoryItems';
import ItemDetails from './pages/ItemDetails';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
// import Header from './components/Header';


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
  path:`category-items/:category`,
  element:<CategoryItems/>
},

{
  path:`item-detail/:id`,
  element:<ItemDetails/>
},


  {
    path:'about-page',
    element:<About/>
  },
  {
    path:'product-page',
    element:<Products/>
  },
 {
  path:'product-detail/:id',
  element:<ProductDetail/>
 },
   <Outlet/>,
    
    ]
    },

  ]);
<App/>  
  return <RouterProvider router ={router}/>
  
}

export default App