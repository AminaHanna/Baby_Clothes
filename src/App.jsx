import { useState} from 'react'
import './App.css'
import All from './Collections/All'
import Girls from './Collections/Girls'
import Boys from './Collections/Boys'
import Header from './Header'
import Front from './Front'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cart from './Cart'
import { createContext } from 'react'

export const Context = createContext()

function App() {

  const [cart,setCart] = useState([])

  // const updateCart=(e)=>{
  //     setCart([...cart,e])
  // }

  const updateCart =(e) =>{
    isItemExist(e)
  }

  const isItemExist =(e) =>{
    let result=cart.find((item)=>item.id==e.id)

    if(result){
      setCart(cart)
    }
    else{
      setCart([...cart,e])
    }
  }



  const router = createBrowserRouter([
    {
      path: "/",
      element: 
      <div>
        <Header/>
        <Front/>
      </div>,
    },
    {
      path: "/all",
      element: <All/>,
    },
    {
      path: "/boys",
      element: <Boys/>,
    },
    {
      path: "/girls",
      element: <Girls/>,
    },
    {
      path: "/cart",
      element: <Cart/>
    }
  ]);

  return (
    <>  
   

    <Context.Provider value={{updateCart,cart}}>

        <RouterProvider router={router} />

    </Context.Provider>
    </>
  )
}

export default App
