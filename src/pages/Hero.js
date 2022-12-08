import React from 'react'
import { useState } from 'react';
import {useDispatch } from 'react-redux';
import {createvehicle} from './slice/Myslice'
import { toast } from 'react-toastify';
import {
  Grid,
  Paper,
} from '@material-ui/core';

const Hero=()=> {
  var user =   localStorage.getItem('user')
  user= JSON.parse(user)
  
  
  const dispatch = useDispatch()
  const[ formData, setFormData] = useState({
       
        model:'',
        price:null,
        phonenumber:null,
  
    })
    const [image,setImage]=useState('')
    const [images,setImages] = useState([]) 
    const [max, setMax] = useState([])
    const {model,price, phonenumber}= formData;
   

   
    
    const onchange=(e)=>{
        console.log(e.target.value)
        setFormData({...formData,[e.target.name]:e.target.value})
        console.log(e.target.name)
    }

    const maxinamge=(e)=>{
      setMax(e.target.value)
    }
    
    

    const imageclick=()=>{
      if(images.length<max){
        setImages(oldArray=>[...oldArray, image])
         setImage('')

      }
      
      else{
        console.log(`can not put more than ${max.length}`)

      }
      
    }


    const imageurl=(e)=>{
      
          setImage(e.target.value)
      
    }

    const submit=()=>{
      if(model.length>2 && price.length>0 && phonenumber.length===11 &&images.length>0)
      {
        const vehicaledata = {
            model, 
            price,
            phonenumber,
            images,
            id:user._id
          }
          console.log(vehicaledata,'vehicaledata')
          dispatch(createvehicle(vehicaledata))
          

      }else{
        toast.error('cheack the credentials are correct')

      }
      

          

     
    }
    console.log(images)
  return (
    <div style={{ padding: 30 }}>
      <Paper>
        <Grid container
          spacing={3}
          direction={'column'}
          justify={'center'}
          alignItems={'center'}
          >
            <Grid>
              <input type='text'
                className='form-control'
                 
                 name='model'
                 value={model}
                 placeholder='Enter user model name'
                 onChange={onchange} />
            </Grid>
            <Grid>
              <input type='Number'
                className='form-control'
               
                 name='price'
                 value={price}
                 placeholder='Enter price'
                 onChange={onchange} />
            </Grid>
            <Grid>
              <input type='text'
                className='form-control'
                 
                 name='phonenumber'
                 value={phonenumber}
                 placeholder='Enter phone number'
                 onChange={onchange} />
            </Grid>
            <Grid>
             
                
              <input type='Number' name='maximage'  placeholder='max number of images' value={max} onChange={maxinamge}/>
              
              
            </Grid>
            <Grid>
              <input type='text'
                className='form-control'
                 
                 name='image'
                 value={image}
                 placeholder='Enter image url'
                 onChange={imageurl} />
                 <button style={{margin:3}} onClick={imageclick}  > save image</button>
                 {/* <input style={{width:6}} /> <p>Max amount of images</p> */}
            </Grid>
            <button style={{ margin: 10, padding:10 }} onClick={submit}> submit</button>
          
        </Grid>
        
      </Paper>   
      <Paper>
        <Grid>
          {/* <h1>images</h1> */}
         {images.map((imge)=>{
          
          //  console.log(imge)
          return (<img src={`${imge}`}  alt={imge}/>)
        })}

        </Grid>
        
      </Paper>  
    </div>
    
  )
}

export default Hero
