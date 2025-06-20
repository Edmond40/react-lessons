import { carDetails } from '../pages/product'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ProductDetailsPage() {
  const { id } = useParams();
  const product = carDetails.find(item => String(item.id) === id);
  console.log(product);
  

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="flex flex-col gap-4 p-4">
        <Link to="/ProductList" className='bg-blue-300 text-gray-50 duration-500 border-2 px-2 py-1 rounded hover:bg-blue-400 w-32'>Go Back</Link>
        <div className="flex items-center gap-4 p-4">
        <img src={product.image} alt={product.name} className="w-full max-w-md rounded mb-4" />
        <div>
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <p>Price: {product.price}</p>
            <p>Category: {product.category}</p>
            <p>New Car: {product.isNewCar ? 'Yes' : 'No'}</p>
        </div>
        </div>
    </div>
  );
}

export default ProductDetailsPage;