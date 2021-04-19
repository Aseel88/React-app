import  React from 'react';
import { Link,Router } from '@reach/router';
import './App.css';
// import Card from './components/Card';
import LoginPage from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import HomePage from './pages/Home';
import NotFound from './pages/NotFound';
import image from "../src/assets/images/background.jpg";

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
      {/* <Link to="/">Home</Link> */}
    </div>
  );
}

export default App;