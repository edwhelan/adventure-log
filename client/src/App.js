import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar'
import AdventureList from './components/AdventureList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <AdventureList />
      </div>
    );
  }
}

export default App;
