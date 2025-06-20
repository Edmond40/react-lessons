import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
function CartListPage() {

    const [count, setCount] = useState(1);
    
      const handleIncrement = () => {
        setCount(count + 1);
      };
      const handleDecrement = () => {
        setCount(count - 1);
      };
      const handleReset = () => {
        setCount(0);
        toast.error('Item removed from cart!', {
            position: 'bottom-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
      };
    return (  
        <div className="min-h-screen p-6">
            <div className="max-w-3xl mx-auto rounded-xl shadow-md p-8">
                {/* Header */}
                <div className='flex justify-center items-center gap-1'>
                    <ShoppingCart></ShoppingCart>
                    <h1 className="text-2xl font-bold text-gray-800"> Your Cart</h1>
                </div>

                {/* Cart Item */}
                <div className="flex items-center justify-between mb-4 border-b pb-4">
                <div className="text-gray-700 font-medium">Sample Car Item</div>
                <div className="flex items-center gap-3">
                    <Plus onClick={handleIncrement} className="bg-yellow-400 hover:bg-yellow-500 text-white rounded-full px-1 py-1 text-lg font-bold cursor-pointer" size={32}></Plus>
                    <span className="text-gray-800 font-semibold text-lg">{count}</span>
                    <Minus onClick={handleDecrement} className="bg-yellow-400 hover:bg-yellow-500 text-white rounded-full px-1 py-1 text-lg cursor-pointer" size={32}></Minus>
                    <Trash2 onClick={handleReset} className="ml-4 text-red-500 hover:underline cursor-pointer">Remove</Trash2>
                    <ToastContainer/>
                </div>
                </div>

                {/* Empty Cart Fallback */}
                <div className="text-center text-gray-500 py-6 animate-pulse">Your cart is empty 😢</div>

                {/* Cart Total & Checkout */}
                <div className="mt-6 text-right">
                <p className="text-lg font-semibold text-gray-800">Total: <span className="text-green-600">$0.00</span></p>
                <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold shadow-md">
                    Checkout
                </button>
                </div>
            </div>
        </div>

     );
}

export default CartListPage;