import { useState } from "react";

import { createTask } from "../../../api/task/task";


export function AddTask({ taskListId, onAdd }) {
    const [taskName, setTaskName] = useState("");

    const handleAddTask = async () => {
        if (!taskName.trim()) return; // Prevent adding empty tasks
        try {
            const newTask = await createTask(taskListId, taskName);
            onAdd(newTask); // Notify parent component about the new task
            setTaskName(""); // Clear input field
        } catch (error) {
            console.error("Error creating task:", error);
            // Optionally, you can show an error message to the user
        }
    };

    return (
        <div>
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
}