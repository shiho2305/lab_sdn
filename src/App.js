import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavWeb from './Component/NavWeb.js';
import Product from './Component/Product.js';
import Categories from './Component/Categories.js';
import ProductDetail from './Component/ProductDetail.js';

// router
const router = createBrowserRouter([
  {
    path: "/",
    element: <NavWeb/>, 
    children: [
      {
        path: "/products", 
        element: <Product/>
      },
      {
        path: "/productsDetals", 
        element: <ProductDetail/>
      },
      {
        path: "/categories", 
        element: <Categories/>
      }
    ]
  },
]);

function App() {
  return (
    <div className="body">
       <RouterProvider router={router}/>
    </div>
  ) 
};

export default App;
