import { configureStore } from '@reduxjs/toolkit';
import Myslice from './pages/slice/Myslice';

export const Store = configureStore({
    reducer:{
        Myslice: Myslice,

    }
})