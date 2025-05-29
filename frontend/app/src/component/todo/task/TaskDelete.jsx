import { deleteTask } from "../../../api/task/task.js";


export function TaskDelete({ task, onDelete }) {
    // This component allows the user to delete a task.
    const handleDelete = async () => {
        if (!window.confirm("Are you sure you want to delete this task?")) {
            return; // User cancelled the deletion
        }
        try {
            await deleteTask();
            if (onDelete) {
                onDelete(task.id); // Call the onDelete callback to update the UI
            }
            // Optionally, you can show a success message or update the UI
        } catch (error) {
            console.error("Error deleting task:", error);
            // Optionally, you can show an error message to the user
        }
    };


    return (
        <button onClick={handleDelete}>
            Delete
        </button>
    );
}

