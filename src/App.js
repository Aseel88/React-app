import  React from 'react';
import { Router } from '@reach/router';
import './App.css';
import LoginPage from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import HomePage from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className= "fullView">
      <Router>
        <HomePage path="/" loggedIn={true}/>
        <LoginPage path="/login" />
        <About path="/about" />
        <Contact path="/contact" />
        <NotFound default />
      </Router> 
     </div>
  );
}

export default App;