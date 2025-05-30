import { deleteTaskList } from "../../../api/task/taskList";

export function TaskListDelete({ taskList, onDelete }) {
    const handleDelete = async () => {
        if (!window.confirm("Are you sure you want to delete this task list?")) {
            return; // User cancelled the deletion
        }
        try {
            await deleteTaskList();
            if (onDelete) {
                onDelete(taskList.id); // Call the onDelete callback to update the UI
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