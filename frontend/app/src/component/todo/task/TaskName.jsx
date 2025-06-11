import { useState } from "react";
import { renameTask } from "../../../api/task/task.js";


export function TaskName({task}) {
    const [editing, setEditing] = useState(false);
    const [newName, setNewName] = useState(task.task_name);
    const [currentName, setCurrentName] = useState(task.task_name);

    const handleRename = async () => {
        try {
            const updatedTask = await renameTask(task.task_id, newName);
            setCurrentName(updatedTask.task_name);
            setEditing(false);
        } catch (error) {
            console.error("Error renaming task:", error);
            // Optionally, you can show an error message to the user
        }
    }
    // This component allows the user to rename a task.

    return (
        <div >
            {editing ? (
                <div>
                    <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                    />
                    <button onClick={handleRename}>Save</button>
                    <button onClick={() => {
                        setEditing(false);
                        setNewName(currentName || '');
                    }}>Cancel</button>
                </div>
            ) : (
                <div>
                    <h3>{currentName}</h3>
                    <button onClick={() => {
                        setEditing(true);
                        setNewName(currentName || '');
                    }}>Rename</button>
                </div>
            )}
        </div>
    )
}