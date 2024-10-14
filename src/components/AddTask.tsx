
const AddTask = () => {
    return (
        <div className="flex my-10 flex-col justify-center items-center">
            <h1 className="text-4xl font-bold">Add Task</h1>
            <form className="flex w-1/3 bg-slate-100 mt-5 rounded-lg shadow-md p-10 flex-col space-y-5">
                <input className="border-2 border-gray-400 px-3 py-2  rounded-md" type="text" placeholder="Task Title" />
                <textarea className="border-2 border-gray-400 px-3 py-2 rounded-md" placeholder="Task Description" />
                <select className="py-2 px-3">
                    <option value="">Select Status</option>
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Complete">Complete</option>
                </select>
                <button className="px-10 py-2 bg-green-300" type="submit">Add Task</button>
            </form>
        </div>
    );
};

export default AddTask;