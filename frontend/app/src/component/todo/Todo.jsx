import { useState } from "react";
import { AddTaskList } from "./list/AddTaskList.jsx";
import { TaskList } from "./list/TaskList.jsx";


export function Todo({ user }) {
    const [taskLists, setTaskLists] = useState([]); // Initialize task lists state

    const handleAddTaskList = (newTaskList) => {
        setTaskLists((prevLists) => [...prevLists, newTaskList]); // Update task lists state with the new task list
    }

    return (
        <div>
            <h1>Todo List</h1>
            <AddTaskList userId={user.id} onAdd={handleAddTaskList} />
            <div className="task-lists">
                {taskLists.map((taskList) => (
                    <TaskList key={taskList.list_id} taskList={taskList} />
                ))}
            </div>
        </div>
    );
}