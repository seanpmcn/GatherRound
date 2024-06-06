import React from 'react';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/auth/AuthDetails';
import './App.css';
import {Toggle} from './Toggle/Toggle.js';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      serverResponse: "" , 
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

  // handles dark mode toggle
  darkToggle = () => {
    this.setState({isDark: !this.state.isDark})
  }

  render() { 
    return (
      <div className="App" data-theme={this.state.isDark ? "dark" : "light"} data-testid='app'>
        <SignUp />
        <SignIn />
        <AuthDetails />
        <Toggle
          isChecked={this.state.isDark}
          handleChange={this.darkToggle}/>
      </div>
    );
  }
}

export default App;
