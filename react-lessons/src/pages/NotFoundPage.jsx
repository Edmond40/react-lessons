import { Link } from 'react-router-dom';


function NotFoundPage() {
    return ( 
        <div className='flex flex-col gap-3 mt-10 w-52 mx-auto'>
            <p>NotFound :(</p>
            <Link to="/ProductList" className='bg-blue-300 text-gray-50 duration-500 border-2 px-2 py-1 rounded hover:bg-blue-400'>Go Home</Link>
        </div>
     );
}

export default NotFoundPage;