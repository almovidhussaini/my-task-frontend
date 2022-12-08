import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import customFetch from '../utils/Axios'
import { toast } from 'react-toastify';
const initialState = {
    user:localStorage.getItem('user'),
    vehicale:[],
    isLoading:false
}

export const login= createAsyncThunk('/login/get',async(userdata,thunkAPI)=>{
    // console.log(userdata ,'userdata inside login')
    try{
        const resp = await customFetch.post('user/login',userdata)
        if(resp.data){
            localStorage.setItem('user',JSON.stringify(resp.data))
            console.log('resdat')
        }
        console.log(resp.data,'responce data')
        return resp.data
    }
    catch(error){
        toast.error('invalid credential')
        
        return null
    }
})

export const createvehicle = createAsyncThunk('/vehicle/post', async(data)=>{
    console.log(data,'data for creating model')
    try{
        
        const resp = await customFetch.post('vehicle/createvehicle',data)
        console.log(resp.data,'responce')
        toast.success('successfully created')
        return resp.data
    }catch(error){
        return error

    }
})

export const getvehicle= createAsyncThunk('/vehicle,post', async(myid)=>{
    try{
        const resp = await customFetch.get('vehicle/getvehicle',{
            params:{
                id:myid
            }  
        })
         console.log(resp.data)
         return resp.data
    }catch(err){
        return err
    }
})
const Myslice = createSlice({
    name:'myslice',
    initialState,

    extraReducers:{
        [login.pending]:(state)=>{
            state.isLoading = true
        },
        [login.fulfilled]:(state,{payload})=>{
            state.isLoading=false;
            state.user = payload;
            console.log('login success')

        },
        [login.rejected]:(state,{payload})=>{
            state.isLoading = false;
            console.log(payload)
            
        }
    }
})

export default Myslice.reducer;