// // import './index.css'
// import {Dialog, DialogTitle, DialogContent, DialogActions, Button} from '@mui/material'

// function TodoDetails({todoDetails, openDialog, setDialog, setTodoDetails}){
//     return(
//         <>
//             <Dialog open={openDialog} onClose={()=> setDialog(false)}>
//                 <DialogTitle>{todoDetails?.todo}</DialogTitle>
//                 <DialogContent>
//                     <p>{todoDetails?.completed}</p>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={() => {
//                         setTodoDetails(null),
//                         setDialog(false)
//                     }}>Close</Button>
//                 </DialogActions>
//             </Dialog>
//         </>
//     )
// }

// export default TodoDetails