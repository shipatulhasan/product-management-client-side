import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import PreviewProduct from '../AddProduct/PreviewProduct';
import UpdateForm from './UpdateForm';

const UpdateProduct = () => {

    const storedProduct = useLoaderData()
  
    const [product,setProduct] = useState(storedProduct)
    const productInfo = {setProduct, product}
    
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">

          <PreviewProduct product={product} />
          <UpdateForm productInfo={productInfo} />


          </div>
          </div>
    );
};

export default UpdateProduct;