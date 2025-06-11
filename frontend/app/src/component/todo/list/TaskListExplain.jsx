import { useState } from "react";
import { updateListExplain } from "../../../api/task/list.js";


export function TaskListExplain({ taskList }) {
    const [currentExplain, setCurrentExplain] = useState(taskList.list_explain || "");
    const [newExplain, setNewExplain] = useState('');
    const [editing, setEditing] = useState(false);

    const handleSaveExplain = async () => {
        try {
            const updatedTaskListExplain = await updateListExplain(taskList.list_id, newExplain);
            console.log("Updated task list explain:", updatedTaskListExplain);
            // Update the local state with the new explain
            setCurrentExplain(updatedTaskListExplain.list_explain);
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