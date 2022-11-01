import React from 'react'
import { Toaster } from 'react-hot-toast'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddProduct from './components/AddProduct/AddProduct'
import Home from './components/Home/Home'
import UpdateProduct from './components/UpdateProduct/UpdateProduct'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      loader:()=>fetch('http://localhost:5000/products'),
      element:<Home />
    },
    {
      path:'/products/add-product',
      element:<AddProduct />
    },
    {
      path:'/products/:id',
      element:<UpdateProduct />,
      loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
    }
  ])

  return (
   <>
     <RouterProvider router = {router} />
     <Toaster />
   </>
  )
}

export default App
