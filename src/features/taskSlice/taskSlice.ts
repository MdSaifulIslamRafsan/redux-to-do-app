import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface taskType {
    id: number;
    title: string;
    description: string;
    status: string;
    completed: boolean;
}

const initialState = {
    tasks: [] as taskType[],
    status: "All",
    loading: false,
    error: null as string | null | undefined,
};
export const fetchTodo = createAsyncThunk("fetchTodo", async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
    const todoData = await response.json();
    return todoData.map((tasks : taskType)=>({
        id: tasks.id,
        title: tasks.title,
        description: '',
        status: tasks.completed ? "complete" : "To Do",
    }))
       
})

export const taskSlice = createSlice({
    name: "tasks",
    initialState: initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        deleteTask: (state, action) => {
            const index = state.tasks.findIndex((task) => task.id === action.payload);
            if (index >= 0) {
                state.tasks.splice(index, 1);
            }
         },
        editTask: (state, action) => {
            state.tasks = state.tasks.map(task => {
                 if(task.id === action.payload.id){
                     return action.payload;
                 }
                 return task;
            });
          },
    },
    extraReducers:(builder) =>{ 
        builder.addCase(fetchTodo.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchTodo.fulfilled, (state, action)=>{
            state.loading = false;
            state.tasks = action.payload;
        })
        builder.addCase(fetchTodo.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
    }
});

export const { deleteTask } = taskSlice.actions;
export const { addTask } = taskSlice.actions;
export const { editTask } = taskSlice.actions;
export default taskSlice.reducer;