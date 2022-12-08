// import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Login from './Login';
import Hero from './Hero';

const Protected=({children})=>{  
   
    const {user} = useSelector((store)=>store.Myslice)
    
    if(user==null){
        
        return <Login/>
    }
     return <Hero/>
    

}

export default Protected;