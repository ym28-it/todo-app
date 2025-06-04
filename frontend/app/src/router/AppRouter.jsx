import { Routes, Route } from 'react-router-dom';

import { Home } from '../component/Home';
import { Todo } from '../component/todo';
import { User } from '../component/User';
import { Login } from '../component/auth/Login';
import { SignUp } from '../component/auth/SignUp';

export function AppRouter() {

    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/todo' element={<Todo />}/>
            <Route path='/user' element={<User />}/>
        </Routes>
    );

}
