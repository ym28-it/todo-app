import { Link } from "react-router-dom";



export function Auth() {
    
    return (
        <div>
            <h2>Auth</h2>
            <Link to={'/login'}>Login</Link>
            <Link to={'/signup'}>SignUp</Link>
        </div>
        
        
    )
}