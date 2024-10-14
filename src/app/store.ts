import { configureStore } from "@reduxjs/toolkit";
import taskReducer  from "../features/taskSlice/taskSlice";

export const store = configureStore({
    reducer: {
       tasks : taskReducer 
    },
   
})