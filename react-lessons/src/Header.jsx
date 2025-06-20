import './App.css'
import { Link, useNavigate } from 'react-router-dom';
// import { BluetoothConnected } from 'lucide-react';
// import Effect from './pages/Effect';

function Header() {
    // const clickHere = (name) => alert(`${name} Welcome to Car Auction`);
    const navigate = useNavigate();
    

    return (
        <header className='sticky top-0 z-10 backdrop-blur-md flex justify-between items-center px-4 py-5 shadow-md font-semibold'>
            <h1>Car Auction</h1>
            <nav className='flex gap-4'>
                <button onClick={() => navigate("/")}>Home</button>
                <button onClick={() => navigate("/ProductList")}>Products</button>
                <button onClick={() => navigate("/CartList")}>Cart</button>
                <button onClick={() => navigate("/")}>Service</button>
            </nav>
            <div className='flex gap-3'>
                <Link to="/">Sign In</Link>
                <Link to="/">Sign Up</Link>
            </div>
        </header>
    )
}

export default Header;