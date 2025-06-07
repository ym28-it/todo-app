import { deleteList } from "../../../api/task/list.js";

export function TaskListDelete({ taskList, onDelete }) {
    const handleDelete = async () => {
        if (!window.confirm("Are you sure you want to delete this task list?")) {
            return; // User cancelled the deletion
        }
        try {
            await deleteList(taskList.list_id); // Call the API to delete the task list
            console.log("Task list deleted successfully:", taskList.list_id);
            if (onDelete) {
                onDelete(taskList.list_id); // Call the onDelete callback to update the UI
            }
            // Optionally, you can show a success message or update the UI
        } catch (error) {
            console.error("Error deleting task list:", error);
            // Optionally, you can show an error message to the user
        }
    }

    return (
        <button onClick={handleDelete}>
            Delete
        </button>
    )
}