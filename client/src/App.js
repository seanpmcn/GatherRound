import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./services/firebase"
import { Navigate } from 'react-router-dom';
import LoginSignup from './components/auth/LoginSignup'
import EmailVerification from "./components/auth/EmailVerification";
import Homepage from "./components/homepage/Homepage";
import Clubs from "./components/clubs/Clubs";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      serverResponse: "",
      isDark: false
    };
  }

  testServerConnection() {
    fetch("http://localhost:9000/test")
      .then(res => res.text())
      .then(res => this.setState({ serverResponse: res }))
  }

  componentWillMount() {
    this.testServerConnection();
  }

  
  // Added Router that facilitates page navigation
  render() {
    return (
      <div className="App" data-theme={this.state.isDark ? "dark" : "light"} data-testid='app'>
        <Router>
          <Routes>
            <Route exact path="/" element={<LoginSignup/>}/>
            <Route path="EmailVerification" element={<PrivateRoute><EmailVerification/></PrivateRoute>}/>
            <Route path="Homepage" element={<PrivateRoute><Homepage/></PrivateRoute>}/>
            <Route path="/Homepage/Clubs" element={<PrivateRoute><Clubs/></PrivateRoute>}/>
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
          </Routes>
        </Router>
      </div>
    );
  }
}


const PrivateRoute = ({children}) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser);
        setUser(currentUser);
    });
    return () => {
        unsubscribe();
    }
  },[])
  
    if (!user) {
      return <Navigate to="/"/>;
    } 
      return children;
    };


export default App;
