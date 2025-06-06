// this component controls TaskListName only
import { useState } from "react";
import { renameList } from "../../../api/task/list.js";


export function TaskListTitle({ taskList }) {
    const [editing, setEditing] = useState(false);
    const [newName, setNewName] = useState(taskList.list_name);
    const [currentName, setCurrentName] = useState(taskList.list_name);

    const handleRename = async () => {
        try {
            const updatedTaskList = await renameList(taskList.list_id, newName);
            setCurrentName(updatedTaskList.list_name);
            setEditing(false);
        } catch (error) {
            console.error("Error renaming task list:", error);
            // Optionally, you can show an error message to the user
        }
    }


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
                    <button onClick={() => setEditing(false)}>Cancel</button>
                </div>
            ) : (
                <div>
                    <h3>{currentName}</h3>
                    <button onClick={() => setEditing(true)}>Rename</button>
                </div>
            )}
        </div>
    )
}