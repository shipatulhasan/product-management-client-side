import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegEdit, FaRegTrashAlt, IconName } from "react-icons/fa";



const Product = ({product, handleDelete}) => {

	const{_id,image,title,price} = product


    return (
        <div>
            <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
			<div className="flex w-full space-x-2 sm:space-x-4">
				<img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={image ? image : 'image not found'} alt={title} />
				<div className="flex flex-col justify-between w-full pb-4">
					<div className="flex justify-between w-full pb-2 space-x-2">
						<div className="space-y-1">
							<h3 className="text-2xl font-semibold leading-snug sm:pr-8">{title}</h3>
							
						</div>
						<div className="text-right">
							<p className="text-lg font-semibold">${price}</p>
							
						</div>
					</div>
					<div className="flex text-sm divide-x">
						<button onClick={()=>handleDelete(product)} type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
						<FaRegTrashAlt />
							<span>Remove</span>
						</button>
						<Link to={`/products/${_id}`}>
						<button type="button" className="flex items-center px-2 py-1 space-x-1">
						<FaRegEdit />
							<span>Edit</span>
						</button>
						</Link>
					</div>
				</div>
			</div>
		</li>
        </div>
    );
};

export default Product;