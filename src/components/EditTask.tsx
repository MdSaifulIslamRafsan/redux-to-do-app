import { useDispatch } from "react-redux";
import { useState } from "react";
import { editTask } from "../features/taskSlice/taskSlice";


const EditTask = () => {
    const [editTaskBtn , setEditTaskBtn] = useState(false);

    const dispatch = useDispatch();

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const title = (form.elements.namedItem('title') as HTMLInputElement).value;
        const description = (form.elements.namedItem('description') as HTMLTextAreaElement).value;
        const status = (form.elements.namedItem('status') as HTMLSelectElement).value as string | undefined | null;   

        dispatch(editTask({title, description , status}))
     };
     const handleEdit = ()=>{
        setEditTaskBtn(!editTaskBtn)
    }
  

    return (
        <div> 
             <button onClick={handleEdit} className="bg-green-500 text-white px-10 py-2 rounded-md mr-4">Edit</button>
{
    editTaskBtn && <div className="absolute">
           
    <form onSubmit={(e)=>handleSubmit(e)} className="flex w-full bg-slate-100 mt-5 rounded-lg shadow-md p-10 flex-col space-y-5">
        <input name="title" className="border-2 border-gray-400 px-3 py-2  rounded-md" type="text" placeholder="Task Title" />
        <textarea name="description" className="border-2 border-gray-400 px-3 py-2 rounded-md" placeholder="Task Description" />
        <select name="status"  className="py-2 px-3">
            <option value="">Select Status</option>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Complete">Complete</option>
        </select>
        <button className="px-10 py-2 bg-green-300" type="submit">Add Task</button>
    </form>
</div>
}

        
        </div>
    );
};

export default EditTask;