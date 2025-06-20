import { Link } from "react-router-dom";
import  { carDetails } from '../pages/product'
import { Car } from "lucide-react";
function ProductListPage() {
    return ( 
        <div className="flex flex-col gap-3">
            <p>This is Product list </p>

            <div className='flex flex-col justify-around m-5 lg:grid grid-cols-4 gap-4'>
                {carDetails.map((item, index) => 
                    <div key={item.id} className='border rounded-xl shadow-sm hover:shadow-none hover:-translate-y-3 duration-500 h-full group'>
                         <img src={item.image} className="w-full h-50 rounded-t-xl" />
                        <div key={index}>
                            <h2>{item.name}</h2>
                            <span>{item.price}</span>
                            <p>{item.category}</p>
                            <p>{item.isNewCar ? 'Yes' : 'No'}</p>
                        </div>
                        <div className='flex justify-between px-4 py-2'>
                        <Car className='w-12 group-hover:translate-x-full duration-500'></Car>
                        <Link to={`/ProductDetails/${item.id}`}>Show Details</Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
        
     );
}

export default ProductListPage;