// import { useEffect, useState } from 'react'
import './index.css'
import Header from './Header';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import CartList from './pages/CartList';
import NotFoundPage from './pages/NotFoundPage';
// import Forms from './components/forms/Forms.jsx'
// import TodoItem from './components/todo-item/index.jsx'
// import TodoDetails from './components/todo-details/index.jsx'
// import { Skeleton } from '@mui/material'



function App() {
//   const [todoList, setTodoList] = useState([])
//   const [loading, setLoading] = useState(false)
//   const [errorMsg, setErrorMsg] = useState('')
//   const [todoDetails, setTodoDetails] = useState(null)
//   const [openDialog, setDialog] = useState(false)
//   async function fetchTodos(){
//     try {
//       setLoading(true)
//       const apiResponse = await fetch('https://dummyjson.com/todos')
//       const data = await apiResponse.json()
//       if(data?.todos && data?.todos.length > 0){
//           setTodoList(data?.todos);
//           setLoading(false)
//           setErrorMsg('')
//         }else{
//           setTodoList([]);
//           setLoading(false)
//           setErrorMsg('No data found')
//         }
//     } catch (e) {
//       console.log(e)
//       setErrorMsg('Something went wrong')
//     }
//   }

//   async function fetchDetailsOfCurrentTodo(getCurrentTodoId){
//     console.log(getCurrentTodoId)
//     try {
//       const apiResponse = await fetch(`https://dummyjson.com/todos/${getCurrentTodoId}`)
//       const result = await apiResponse.json()
//       setTodoDetails(result)
//       console.log(result);
//       if(result){
//         setTodoDetails(result)
//         setDialog(true)
//       }
//     } catch (error) {
//       console.log(error);
//       setTodoDetails(null)
//       setDialog(false)
      
//     }
//   }
  
//   useEffect(() => {
//     fetchTodos()
//   }, [])

//   if(loading) return <Skeleton variant="rectangular" width={210} height={118} />;

  return (
    <>
      <Header />
      <Routes>
        <Route path='/ProductList' element={<ProductList />}></Route>
        <Route path='/ProductDetails/:id' element={<ProductDetails />}></Route>
        <Route path='/CartList' element={<CartList />}></Route>
        <Route path='*' element={<NotFoundPage/>}></Route>
      </Routes>
      {/* <div>
        <Forms />
      </div> */}
      {/* <div>
        <h2 className='text-3xl font-semibold'>Todo App</h2>
        <div className='grid grid-cols-3 gap-5'>
          {
            todoList && todoList.length > 0 ? todoList.map((todos) => <TodoItem todo={todos} fetchDetailsOfCurrentTodo={fetchDetailsOfCurrentTodo}/>) : 'No data found'
          }
        </div>
        <TodoDetails openDialog={openDialog} setDialog={setDialog} todoDetails={todoDetails} setTodoDetails={setTodoDetails}/>
      </div> */}
    </>
  );
}

export default App
