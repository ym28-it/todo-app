import { Link } from "react-router-dom";


export default function Navbar() {
    
    return (
        <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/todo'}>Todo</Link>
            <Link to={'/user'}>User</Link>
        </div>
            
    );
}