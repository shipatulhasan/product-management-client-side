import React from 'react';

const UpdateForm = ({productInfo}) => {

    const {setProduct, product} = productInfo
    const {image,title,price,_id} = product

    const handleProduct = (e)=>{
        e.preventDefault()


        fetch(`http://localhost:5000/products/${_id}`,{
            method:'put',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }

    const handleInput = (e)=>{

        const field = e.target.name
        const value = e.target.value

        const newProduct = {...product}
        newProduct[field] = value
        setProduct(newProduct)

    } 
    return (
        <div className="w-full max-w-md p-8 border border-slate-200 shadow-xl shadow-slate-200 rounded space-y-3  dark:bg-gray-900 dark:text-gray-100">
	<h1 className="text-2xl font-bold text-center mb-10">Add your product</h1>
	<form onSubmit={handleProduct} className="space-y-6 ng-untouched ng-pristine ng-valid ">
    <div className="space-y-1 text-sm">
			<label htmlFor="image" className="block dark:text-gray-400">Image url</label>
			<input onChange={handleInput} type="text" name="image" id="image" placeholder="url" className="w-full px-4 py-3 rounded border border-slate-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-sky-400" defaultValue={image} />
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="productname" className="block dark:text-gray-400">Product name</label>
			<input onChange={handleInput} type="text" name="title" id="productname" placeholder="product title" className="w-full border border-slate-300 px-4 py-3 rounded dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-sky-400" defaultValue={title} />
		</div>
		
		<div className="space-y-1 text-sm">
			<label htmlFor="password" className="block dark:text-gray-400">Product Price</label>
			<input onChange={handleInput} type="text" name="price" id="password" placeholder="product price" className="w-full px-4 py-3 rounded border border-slate-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-sky-400" defaultValue={price} />
			
		</div>
		<button className="block text-slate-50 w-full p-3 text-center rounded-sm dark:text-gray-900 bg-green-600">Update</button>
	</form>
   

</div>
    );
};

export default UpdateForm;