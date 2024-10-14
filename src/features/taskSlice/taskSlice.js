import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
    tasks: [],
    status: "All",
    loading: false,
    error: null,
};
const fetchTodo = createAsyncThunk("fetchTodo", async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
    const todoData = await response.json();
    return todoData.map((task)=>({
        id: task.id,
        title: task.title,
        description: '',
        status: task.completed ? "complete" : "To Do",
    }))
       
})

export const taskSlice = createSlice({
    name: "tasks",
    initialState: initialState,
    reducers: {},
    extraReducers:(builder) =>{ 
        builder.addCase(fetchTodo.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }),
        builder.addCase(fetchTodo.fulfilled, (state, action)=>{
            state.loading = false;
            state.tasks = action.payload;
        }),
        builder.addCase(fetchTodo.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export default taskSlice.reducer;