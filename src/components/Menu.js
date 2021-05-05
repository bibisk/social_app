import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import LoginForm from './LoginForm';
import SignUp from './SignUp';

 
  export default function Menu() {
    return (
      <Router>
      <div style={{
        background: "white",
        padding: "10px",
        width: "40%"
      }}>
        <div style={{display:"flex"}}>
          <nav>
            <ul style={{listStyleType: "none", padding: 0}}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/login">
              <About />
            </Route>
            <Route path="/signup">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
      </Router>
    );
  }
  
  function Home() {
    return <h2>Home</h2>;
  }
  
  function About() {
    return <LoginForm/>;
  }
  
  function Users() {
    return <SignUp/>;
  }
  