import { useState } from 'react';

import { createList } from '../../../api/task/list';


export function AddTaskList({ userId, onAdd }) {
    const [taskListName, setTaskListName] = useState("");

    const handleAddTaskList = async () => {
        if (!taskListName.trim()) return; // Prevent adding empty task lists
        try {
            const newTaskList = await createList(userId, taskListName);
            onAdd(newTaskList); // Notify parent component about the new task list
            setTaskListName(""); // Clear input field
        } catch (error) {
            console.error("Error creating task list:", error);
            // Optionally, you can show an error message to the user
        }
    }

    return (
        <div>
            <input
                type="text"
                value={taskListName}
                onChange={(e) => setTaskListName(e.target.value)}
                placeholder="Add a new task list"
            />
            <button onClick={handleAddTaskList}>Add Task List</button>
        </div>
    )
}