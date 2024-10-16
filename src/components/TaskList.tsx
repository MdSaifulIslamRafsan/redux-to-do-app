import { useDispatch, useSelector } from "react-redux";
import  { RootState, AppDispatch }  from "../app/store";
import { deleteTask, fetchTodo } from "../features/taskSlice/taskSlice";
import EditTask from "./EditTask";
import { useEffect } from "react";

interface taskType {
    id: number,
    title: string,
    description: string,
    status: string,
} 
const TaskList = () => {
    const tasks = useSelector((state : RootState) => state.tasks.tasks);

    
    const loading = useSelector((state : RootState) => state.tasks.loading);
    const error = useSelector((state : RootState) => state.tasks.error);
    const dispatch : AppDispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchTodo())
    },[dispatch]);
    const handleDelete = (taskId: number | string)=>{
        dispatch(deleteTask(taskId))
    }
   
    if(loading) return <p>Loading...</p>;
    if(error) return <p>This is an error {error}</p>;
    
    
    return (
        <div className="relative">
        <div>
            <h1 className="font-bold text-4xl mb-5 text-center">To Do App</h1>
            {tasks.length === 0 && <p className="font-bold text-xl text-center">No tasks found.</p> }
              
                    { tasks.length !== 0 && tasks.map((task : taskType) => (
                    <div className="flex items-center max-w-3xl mx-auto justify-between my-5 bg-slate-200 p-5 rounded-md" key={task.id}>
                        <div>
                            <h2>{task.title}</h2>
                            {task.description && <p>{task.description}</p>}
                            <p>status: {task.status}</p>
                        </div>
                        <div className="flex gap-2">
                           <EditTask></EditTask>
                            <button onClick={()=> handleDelete(task.id)} className="bg-red-500 text-white px-8 py-2 rounded-md ">Delete</button>
                        </div>
                    </div>

                ))}
            
        </div>
      
        </div>
    );
};

export default TaskList;