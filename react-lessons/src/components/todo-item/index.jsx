// import { Card, CardContent, Typography, CardActions, Button } from "@mui/material"


// function TodoItem({todo, fetchDetailsOfCurrentTodo}){
//     return(
//         <Card sx={{ 
//             maxWidth: 350, 
//             display : "flex",
//             flexDirection : "column",
//             justifyContent : "center"
//         }}
//         >
//             <CardContent >
//                 <Typography variant="h3" color="text.secondary">
//                     {todo?.todo}
//                 </Typography>
//             </CardContent>
//             <CardActions>
//                 <Button onClick={()=> fetchDetailsOfCurrentTodo(todo.id)} sx={{
//                     margin : "auto",
//                     border : "1px solid",
//                     borderRadius : "40px",
//                     "&:hover" : {
//                         backgroundColor : "lightgreen",
//                         border : "1px solid",
//                         color : "white"
//                     }
//                 }}>Details</Button>
//             </CardActions>
//         </Card>
//     )
// }

// export default TodoItem