import { useState } from "react";
import { updateTaskExplain } from "../../../api/task/task.js";


export function TaskExplain({ task }) {
    const [explain, setExplain] = useState(task.explain || "");
    const [editing, setEditing] = useState(false);

    const handleSaveExplain = async () => {
        try {
            const updatedTask = await updateTaskExplain(task.id, explain);
            setExplain(updatedTask.explain);
            setEditing(false);
        } catch (error) {
            console.error("Error updating task explain:", error);
            // Optionally, you can show an error message to the user
        }
    };


    return (
        <div>
            {editing ? (
                <div>
                    <textarea
                        value={explain}
                        onChange={(e) => setExplain(e.target.value)}
                        rows="4"
                        cols="50"
                    />
                    <button onClick={handleSaveExplain}>Save</button>
                    <button onClick={() => setEditing(false)}>Cancel</button>
                </div>
            ) : (
                <div>
                    <p>{explain || "No explanation provided."}</p>
                    <button onClick={() => setEditing(true)}>Edit Explanation</button>
                </div>
            )}
        </div>
    );
}
