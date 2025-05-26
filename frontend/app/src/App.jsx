import { BrowserRouter } from 'react-router-dom';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import { AppRouter } from './router/AppRouter';
import Navbar from './component/Navbar';

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App
