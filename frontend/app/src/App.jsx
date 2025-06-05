import { BrowserRouter } from 'react-router-dom';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import { AppRouter } from './router/AppRouter';

function App() {
  console.log('App component rendered');

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App
