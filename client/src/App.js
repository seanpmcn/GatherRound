import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginSignup from './components/auth/LoginSignup'
import EmailVerification from "./components/auth/EmailVerification";
import Homepage from "./components/auth/Homepage";
import DatabaseTest from './database/DatabaseTest';


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
            <Route path="/" element={<LoginSignup/>}/>
            <Route path="EmailVerification" element={<EmailVerification/>}/>
            <Route path="Homepage" element={<Homepage/>}/>
            <Route path="DatabaseTest" element={<DatabaseTest/>}/>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
