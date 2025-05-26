import { Routes, Route } from 'react-router-dom';

import { Auth } from '../component/Auth';
import { Todo } from '../component/todo';
import { User } from '../component/User';

export function AppRouter() {

    return (
        <Routes>
            <Route path='/' element={<Auth />}/>
            <Route path='/todo' element={<Todo />}/>
            <Route path='/user' element={<User />}/>
        </Routes>
    );

}
