import { useSelector } from "react-redux";
import RootState  from "../app/store";
interface taskType {
    id: number,
    title: string,
    description: string,
    status: string,
} 
const TaskList = () => {
    const tasks = useSelector((state : RootState) => state.task.tasks);
    const loading = useSelector((state : RootState) => state.task.loading);
    const error = useSelector((state : RootState) => state.task.error);
  
    if(loading) return <p>Loading...</p>;
    if(error) return <p>This is an error{error}</p>
    
    return (
        <div>
            <h1 className="font-bold text-4xl mb-5 text-center">To Do App</h1>
            {
                tasks.length === 0 ? <p className="font-bold text-xl text-center">No tasks found.</p> :
                tasks.map((task : taskType) => (
                    <div key={task.id}>
                        <h2>{task.title}</h2>
                        {task.description && <p>task.description</p>}
                        <p>status: {task.status}</p>
                        <div>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    </div>

                ))
            }
        </div>
    );
};

export default TaskList;