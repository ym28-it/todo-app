import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../api/user/user";


export function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    // Note: Password should be handled securely, consider using a library for hashing
    // backend cruds hash password
    // Should hash password before sending to backend?
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await createUser(username, email, password);
            // Handle successful signup, e.g., redirect or show a success message
            console.log("Signup successful:", response);
            // go to todo page
            navigate('/todo', { state: { user: response } });
        } catch (err) {
            console.error("Signup error:", err);
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" minLength={3} required name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}
