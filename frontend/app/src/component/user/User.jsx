import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserNameUpdate } from "./UserNameUpdate.jsx";
// import { UserEmail } from "./UserEmail.jsx";
// import { UserPassword } from "./UserPassword.jsx";
import { readUser } from "../../api/user/user.js";



export function User() {
    const location = useLocation();
    const userFromLocation = location.state?.user
    const [UserName, setUserName] = useState('');
    const [UserEmail, setUserEmail] = useState('');
    const [UserPassword, setUserPassword] = useState('');

    async function readUserInfo() {
        try {
            const userInfo = await readUser(userFromLocation.user_id);
            console.log('userInfo:', userInfo);
            setUserName(userInfo.user_name);
            setUserEmail(userInfo.email);
            setUserPassword(userInfo.password);
        } catch (error) {
            console.error("Error reading user:", error);
        }
    }

    useEffect(() => {
            readUserInfo();
        }, []);


    const onUpdateUserName = (updatedUser) => {
        setUserName(updatedUser.user_name);
    }


    return (
        <div>
            <h1>User</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/todo" state={{ user: userFromLocation }}>Todo</Link>
            </div>
            <div>
                <p>User Name: {UserName}</p>
                <p>Email: {UserEmail}</p>
            </div>
            <UserNameUpdate user={userFromLocation} onUpdateUserName={onUpdateUserName} />
            {/* <UserEmail/>
            <UserPassword/> */}
        </div>

    )
}