import { carDetails } from '../pages/product'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ShoppingBag,ShoppingCart,Trash2 } from 'lucide-react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import React from 'react';

function ProductDetailsPage() {
  const { id } = useParams();
  const product = carDetails.find(item => String(item.id) === id);
  console.log(product);
  
  const [count, setCount] = useState(0);

  const handleReset = () => {
        setCount(0);
      };
  function handleAddToCart() {
    // const cart = localStorage.getItem('cart');
    // if (cart) {
    //   const parsedCart = JSON.parse(cart);
    //   parsedCart.push(product);
    //   localStorage.setItem('cart', JSON.stringify(parsedCart));
    // } else {
    //   localStorage.setItem('cart', JSON.stringify([product]));
    // }
    setCount(count + 1);
    toast.success('Product added to cart!', {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })
    // alert("Product added to cart");
  }
  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="flex flex-col gap-4 p-3">
        
        <div className='flex justify-between px-4'>
            <Link to="/ProductList" className='bg-blue-300 text-gray-50 duration-500 border-2 px-2 py-1 rounded hover:bg-blue-400 w-32'>Go Back</Link>
            <div className='relative'>
                <p className='font-semibold text-xl absolute bottom-4 -right-2.5 bg-red-600 text-white px-1 py-0.5 rounded'>{count}</p>
                <Link to="/CartList">
                    <ShoppingBag className='text-gray-600' size={32}></ShoppingBag>   
                </Link>
            </div>
            
        </div>
        <div className="flex items-center gap-4 p-4">
            <img src={product.image} alt={product.name} className="w-full max-w-md rounded mb-4" />
            <div>
                <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
                <p>Price: {product.price}</p>
                <p>Category: {product.category}</p>
                <p>New Car: {product.isNewCar ? 'Yes' : 'No'}</p>

                <div className='flex items-center gap-2'>
                    <div className='bg-blue-300 text-gray-50 duration-500 border-2 px-2 py-2 rounded hover:bg-blue-400 flex gap-2 font-medium cursor-pointer' onClick={handleAddToCart}>                  
                        <ShoppingCart></ShoppingCart>
                        <button className='cursor-pointer'>Add to Cart</button>
                    </div>
                    <Trash2 onClick={handleReset} className='text-red-600 cursor-pointer'>Reset</Trash2>
                </div>
            </div>
        </div>
        <ToastContainer/>
    </div>
  );
}

export default ProductDetailsPage;