import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {login} from './slice/Myslice'

import {
  Grid,
  Paper,
  Button
} from '@material-ui/core';


const Login=()=> {

    const[ formData, setFormData] = useState({
       
        username:'',
        password:'',
  
    })
    const {username, password}= formData;
    const dispatch = useDispatch()


    const click=()=>{ 
        console.log('onclick')
        if(username.length!==0 && password.length!==0){
          const userData = {
            username, 
             password
          }
          dispatch(login(userData))
        }
}
    const onchange=(e)=>{
        console.log(e.target.value)
        setFormData({...formData,[e.target.name]:e.target.value})
        console.log(e.target.name)
    }
   

   

  return (
    <div style={{ padding: 30 }}>
      <Paper>
        <Grid
          container
          spacing={3}
          direction={'column'}
          justify={'center'}
          alignItems={'center'}
        >
          <Grid item xs={12}>
            <input
                type='text'
                className='form-control'
                 id='email'
                 name='username'
                 value={username}
                 placeholder='Enter user name'
                 onChange={onchange}/>
            
          </Grid>
          <Grid item xs={12}>
            <input
                type='text'
                className='form-control'
                 id='password'
                 name='password'
                 value={password}
                 placeholder='Enter your password'
                 onChange={onchange}/>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth onClick = {click}> Login </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
  
}

export default Login
