import { useState } from "react";

import { renameUserName } from "../../api/user/user.js";

export function UserName({ user, onUpdate }) {
    const [newName, setNewName] = useState(user.name);
    const [isEditing, setIsEditing] = useState(false);

    const handleRename = async () => {
        try {
            const updatedUser = await renameUserName(user.id, newName);
            onUpdate(updatedUser);
            setIsEditing(false);
        } catch (error) {
            console.error("Error renaming user:", error);
            // Optionally, you can show an error message to the user
        }
    };

    return (
        <div>
            <h2>User Name</h2>
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
                    <p>{user.name}</p>
                    <button onClick={() => setIsEditing(true)}>Edit Name</button>
                </div>
            )}
        </div>
    );
}