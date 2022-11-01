import React from 'react';
import { useState } from 'react';
import PreviewProduct from './PreviewProduct';
import ProductForm from './ProductForm';

const AddProduct = () => {
    const [product,setProduct] = useState({})
    const productInfo = {setProduct, product}
    
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">

          <PreviewProduct product={product} />
          <ProductForm productInfo={productInfo} />


          </div>
          </div>
    );
};

export default AddProduct;