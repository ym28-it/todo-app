import { useState, useEffect } from "react";

import { updateIsDone } from "../../../api/task/task.js";


export function TaskStatus() {
    const [isDone, setIsDone] = useState(false);

    const handleToggleStatus = async () => {
        try {
            const updatedTask = await updateIsDone(isDone);
            setIsDone(updatedTask.isDone);
        } catch (error) {
            console.error("Error updating task status:", error);
            // Optionally, you can show an error message to the user
        }
    }


    return (
        <div>
            <p>
                Status: <span style={{ color: isDone ? 'green' : 'red' }}>
                    {isDone ? 'Done' : 'Not Done'}
                </span>
            </p>
            <button onClick={handleToggleStatus}>
                { isDone ? 'Mark as Incomplete' : 'Mark as Done'}
            </button>
        </div>
    );
}
