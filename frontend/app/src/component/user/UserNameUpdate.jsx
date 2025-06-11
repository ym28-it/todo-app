import { useState } from "react";

import { renameUserName } from "../../api/user/user.js";

export function UserNameUpdate({ user, onUpdateUserName }) {
    const [newName, setNewName] = useState(user.user_name ?? '');
    const [isEditing, setIsEditing] = useState(false);

    const handleRename = async () => {
        try {
            const updatedUser = await renameUserName(user.user_id, newName);
            onUpdateUserName(updatedUser);
            setIsEditing(false);
        } catch (error) {
            console.error("Error renaming user:", error);
            // Optionally, you can show an error message to the user
        }
    };

    return (
        <div>
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                    />
                    <button onClick={handleRename}>Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
            ) : (
                <div>
                    <button onClick={() => setIsEditing(true)}>Edit Name</button>
                </div>
            )}
        </div>
    );
}