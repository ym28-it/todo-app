import { useState } from "react";
import { updateTaskExplain } from "../../../api/task/task.js";


export function TaskExplain({ task }) {
    const [currentExplain, setCurrentExplain] = useState(task.task_explain || "");
    const [newExplain, setNewExplain] = useState('');
    const [editing, setEditing] = useState(false);

    const handleSaveExplain = async () => {
        try {
            const updatedTaskExplain = await updateTaskExplain(task.task_id, newExplain);
            console.log("Updated task list explain:", updatedTaskExplain);
            // Update the local state with the new explain
            setCurrentExplain(updatedTaskExplain.task_explain);
            setEditing(false);
        } catch (error) {
            console.error("Error updating task list explain:", error);
            // Optionally, you can show an error message to the user
        }
    };


    return (
        <div>
            {editing ? (
                <div>
                    <textarea
                        value={newExplain}
                        onChange={(e) => setNewExplain(e.target.value)}
                        rows="4"
                        cols="50"
                    />
                    <button onClick={handleSaveExplain}>Save</button>
                    <button onClick={() => {
                        setEditing(false);
                        setNewExplain(currentExplain || '');
                    }}>Cancel</button>
                </div>
            ) : (
                <div>
                    <p>{currentExplain || "No explanation provided."}</p>
                    <button onClick={() => {
                        setEditing(true);
                        setNewExplain(currentExplain || '');
                    }}>Edit Explanation</button>
                </div>
            )}
        </div>
    )

}
