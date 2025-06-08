import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { AddTaskList } from "./list/AddTaskList.jsx";
import { TaskList } from "./list/TaskList.jsx";


export function Todo() {
    const [taskLists, setTaskLists] = useState([]); // Initialize task lists state

    const location = useLocation();
    const user = location.state?.user; // Get user from location state
    if (!user) {
        console.error("User not found in location state");
        return <div>Error: User not found</div>; // Handle case where user is not found
    }

    console.log("Todo component rendered with user:", user);

    const handleAddTaskList = (newTaskList) => {
        setTaskLists((prevLists) => [...prevLists, newTaskList]); // Update task lists state with the new task list
    }

    const handleDeleteTaskList = (taskListId) => {
        setTaskLists((prevLists) => prevLists.filter(list => list.list_id !== taskListId)); // Remove the task list from the state
    }

    return (
        <div>
            <h1>Todo List</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/user" state={{ user: user }}>User</Link>
            </div>
            <AddTaskList userId={user.user_id} onAdd={handleAddTaskList} />
            <div className="task-lists">
                {taskLists.map((taskList) => (
                    <TaskList key={taskList.list_id} taskList={taskList} onDeleteTaskList={handleDeleteTaskList} />
                ))}
            </div>
        </div>
    );
}