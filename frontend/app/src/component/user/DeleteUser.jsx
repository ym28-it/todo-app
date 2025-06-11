import { useNavigate } from "react-router-dom";
import { deleteUser } from "../../api/user/user";


export function DeleteUser({ user }) {

    const navigate = useNavigate();

    const handleDelete = async () => {
        if (!window.confirm("Are you sure you want to delete this user?")) {
            return;
        }
        try {
            await deleteUser(user.user_id);
            // go to home page
            navigate('/');
            alert("User deleted successfully.");
            // Optionally, you can show a success message or update the UI
        } catch (error) {
            console.error("Error deleting user:", error);
            alert("Failed to delete user. Please try again later.");
        }
    };

    return (
        <button onClick={handleDelete}>
            Delete Account
        </button>
    )


}