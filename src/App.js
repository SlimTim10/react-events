import React from 'react';
import './App.css';

class App extends React.Component {
  handleLogin(event) {
    event.preventDefault();
    const form = event.target;
    const nameField = form.elements.name;
    const passwordField = form.elements.password;
    console.log(nameField.value);
    console.log(passwordField.value);
    if (nameField.value === 'admin' && passwordField.value === '1234') {
      alert('Login successful!');
    } else {
      alert('Invalid login');
    }
  }

  handleLogout(event) {
    alert('Logged out');
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form action="/" onSubmit={this.handleLogin}>
            <p>Login</p>
            <div>
              <label>Name</label><input name="name" type="text" />
            </div>
            <div>
              <label>Password</label><input name="password" type="password" />
            </div>
            <input name="submit" type="submit" value="Submit" />
          </form>
          <div className="logout">
            <button onClick={this.handleLogout}>Logout</button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
