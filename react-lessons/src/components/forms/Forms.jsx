// import { useState } from 'react';
import { Button } from '@mui/material';
import '../../index.css';
import { useState } from 'react';

function Forms(){       
    const [formData, setFormData] = useState({
        name : '',
        email : '',
        password : '',
        tel : ''
    })
    function handleOnChange(event){
        const {name, value} = event.target;

        setFormData({
            ...formData,
            [name] : value
        })
        // console.log(event.target.name);  
    }
    console.log(formData);
    
    
    const handleSubmit = (e) => e.preventDefault();
    
    return(
        <div className='flex flex-col gap-3 m-0'>
            <h2 className='text-2xl font-semibold'>My Forms</h2>
            <form action="" onSubmit={handleSubmit} className='flex flex-col w-60 mx-auto gap-5'>
                {/* <p>{nameValue}</p> */}
                <input type="text" value={formData.name} name="name" id="" placeholder='Enter your name' onChange={handleOnChange} className='border-2 px-2 py-1 rounded'/>

                <input type="email" value={formData.email} name="email" id="" placeholder='Enter your email' onChange={handleOnChange} className='border-2 px-2 py-1 rounded'/>

                <input type="password" value={formData.password}  name="password" id="" placeholder='Enter your password'  onChange={handleOnChange} className='border-2 px-2 py-1 rounded'/>

                <input type="tel" value={formData.tel} name="tel" id="" placeholder='Enter your phone number'  onChange={handleOnChange} className='border-2 px-2 py-1 rounded'/>

                {/* <input type='date' value={formData.date} name="dateofbirth" id="" placeholder='Enter your DOB' onChange={handleOnChange} className='border-2 px-2 py-1 rounded'/> */}
                {/* <p></p> */}
                <Button type='submit' sx={{
                    border : "1px solid", 
                    borderRadius : "40px", 
                    "&:hover" : {backgroundColor : "lightgreen", 
                                border : "1px solid", 
                                color : "white"} 
            }}>Submit</Button>
            </form>
            <p>{formData.name}</p>
            <p>{formData.email}</p>
            <p>{formData.tel}</p>
        </div>
    )
}

export default Forms;