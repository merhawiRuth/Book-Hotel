import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/RoomList';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div class="ui four column grid">
          <TourList />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
