import './App.css'

function Footer(){
    return(
        <footer className='flex justify-center mt-10'>
            <p>&copy; {new Date().getFullYear()} car auction</p>
        </footer>
    )
}

export default Footer