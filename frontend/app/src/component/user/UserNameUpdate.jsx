import { useState } from "react";

import { renameUserName } from "../../api/user/user.js";

export function UserNameUpdate({ user, onUpdateUserName }) {
    const [newName, setNewName] = useState(user.user_name ?? '');
    const [currentName, setCurrentName] = useState(user.user_name ?? '');
    const [isEditing, setIsEditing] = useState(false);

    const handleRename = async () => {
        try {
            const updatedUser = await renameUserName(user.user_id, newName);
            setCurrentName(updatedUser.user_name);
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
                    <button onClick={() => {
                        setNewName(currentName || '');
                        setIsEditing(false)
                    }}>Cancel</button>
                </div>
            ) : (
                <div>
                    <button onClick={() => {
                        setNewName(currentName || '');
                        setIsEditing(true)
                    }}>Rename</button>
                </div>
            )}
        </div>
    );
}