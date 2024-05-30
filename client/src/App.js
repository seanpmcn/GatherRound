import React from 'react';
import SignIn from './components/auth/SignIn';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { serverResponse: "" };
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
      <div className="App">
        <SignIn />
      </div>
    );
  }
}

export default App;
