import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

import AppNavbar from './components/AppNavbar';
import AdventureList from './components/AdventureList';
import ItemModal from './components/ItemModal'
import MediaHeader from './components/MediaHeader'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <MediaHeader />
          <Container>
            <ItemModal />
            <AdventureList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
