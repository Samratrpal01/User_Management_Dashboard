import logo from './logo.svg';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './pages/homePage';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>} />
      </Routes>
    </Router>
  );
}

export default App;
