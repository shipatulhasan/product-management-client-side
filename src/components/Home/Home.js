import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import Proudct from "./Proudct";

const Home = () => {
    const products = useLoaderData()
    const [displayProducts, setDisplayProducts] = useState(products)
    
    const handleDelete = (product)=>{
		const confirmation = window.confirm(`Would you like to delete ${product.title}`)

		if(confirmation){
			fetch(`http://localhost:5000/products/${product._id}`,{
			method:'delete'
		})
		.then(req=>req.json())
		.then(data=>{
			if(data.acknowledged){

				const remainingProduct = displayProducts.filter(item => item._id !== product._id)
				setDisplayProducts(remainingProduct)

				toast.success('Successfully deleted')
				
			}
			
		})
		}
		
	}


  return (
    <div className="flex flex-col max-w-2xl mx-auto p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
     <div className="text-center mb-5">
     <h2 className="text-xl font-semibold">
        Total product: {displayProducts.length}
      </h2>
      <Link to="/products/add-product">
        <button
          type="button"
          className="mt-4 px-6 py-2 border rounded border-sky-400"
        >
          Add more product
        </button>
      </Link>
     </div>

      <ul className="flex flex-col divide-y divide-gray-700">

          {
              displayProducts.map(product=><Proudct key={product._id} handleDelete={handleDelete} product={product} />)
          }

      </ul>
    </div>
  );
};

export default Home;
