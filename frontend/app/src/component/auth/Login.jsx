import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logIn } from "../../api/user/user";


export function Login() {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await logIn(username, password);
            // Handle successful login, e.g., redirect or show a success message
            console.log("Login successful:", response);
            // go to todo page
            navigate('/todo', {state: { user: response }});
        } catch (err) {
            console.error("Login error:", err);
        }
    }


    return (
        <div>
            <h2>Login</h2>
            <form action="/login" method="POST">
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)}  required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit" onClick={handleLogin}>Login</button>
            </form>
        </div>
    )
}
