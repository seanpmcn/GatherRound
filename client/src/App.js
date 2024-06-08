import React from 'react';
import LoginSignup from './components/auth/LoginSignup.jsx';
import './App.css';
import SignIn from './components/auth/SignIn.jsx';
import SignUp from './components/auth/SignUp.jsx';
import AuthDetails from './components/auth/AuthDetails.jsx'


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

  render() {
    return (
      <div className="App" data-theme={this.state.isDark ? "dark" : "light"} data-testid='app'>
        {/* <LoginSignup /> */}
        <SignIn />
        <SignUp />
        <AuthDetails />
      </div>
    );
  }
}

export default App;
