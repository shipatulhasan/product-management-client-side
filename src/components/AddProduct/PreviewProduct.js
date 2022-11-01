import React from 'react';
import { Link } from 'react-router-dom';

const PreviewProduct = ({product}) => {
    const {image, price, title} = product
    return (
        <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
        <h2 className="text-xl font-semibold">Product preview</h2>
        <ul className="flex flex-col divide-y divide-gray-700">
            <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                <div className="flex w-full space-x-2 sm:space-x-4">
                    <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={image ? image : "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" } alt={title} />
                    <div className="flex flex-col justify-between w-full pb-4">
                        <div className="flex justify-between w-full pb-2 space-x-2">
                            <div className="space-y-1">
                                <h3 className="text-2xl font-semibold leading-snug sm:pr-8">{title ? title : 'Demo product'}</h3>
                                <p className="text-base  text-slate-600">Price <span>${price ? price : '50'}</span></p>
                                
                            </div>
                            <div className="text-right">
                                
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </li>
         
        </ul>
        <Link to="/">
        <button
          type="button"
          className=" mt-3 px-6 py-2 border rounded border-sky-400"
        >
          View All product
        </button>
      </Link>
    </div>
    );
};

export default PreviewProduct;