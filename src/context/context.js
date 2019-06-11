import React, { Component } from 'react';
import { roomData } from './roomData';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    room1: true,
    chil1: 0,
    Adul1: 1,
    room2: false,
    chil2: 0,
    Adul2: 1,
    room3: false,
    chil3: 0,
    Adul3: 1,
    room4: false,
    chil4: 0,
    Adul4: 1
  };
  hydrateStateWithLocalStorage() {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          this.setState({ [key]: value });
        }
      }
    }
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();
  }
  handleChangedValue = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleRoom = room => {
    switch (room) {
      case 2:
        room = 'room2';
        break;
      case 3:
        room = 'room3';
        break;
      case 4:
        room = 'room4';
        break;
    }

    if (room === 'room2') {
      this.setState({
        room2: !this.state.room2,
        room3: false,
        room4: false,
        chil3: 0,
        Adul3: 1,
        chil4: 0,
        Adul4: 1
      });
    }
    if (room === 'room3') {
      this.setState({
        room2: true,
        room3: !this.state.room3,
        room4: false,
        chil4: 0,
        Adul4: 1
      });
    }
    if (room === 'room4') {
      this.setState({
        room2: true,
        room3: true,
        room4: !this.state.room4
      });
    }
    if (this.state.room3 === true) {
      this.setState({
        chil3: 0,
        Adul3: 1
      });
    }
    if (this.state.room4 === true) {
      this.setState({
        chil4: 0,
        Adul4: 1
      });
    }
    if (this.state.room2 === true) {
      this.setState({
        chil2: 0,
        Adul2: 1
      });
    }
  };
  handleSubmit = () => {
    const {
      room1,
      room2,
      room3,
      room4,
      chil1,
      chil2,
      chil3,
      chil4,
      Adul1,
      Adul2,
      Adul3,
      Adul4
    } = this.state;
    localStorage.setItem('room1', room1);
    localStorage.setItem('room2', room2);
    localStorage.setItem('room3', room3);
    localStorage.setItem('room4', room4);
    localStorage.setItem('chil1', chil1);
    localStorage.setItem('chil2', chil2);
    localStorage.setItem('chil3', chil3);
    localStorage.setItem('chil4', chil4);
    localStorage.setItem('Adul1', Adul1);
    localStorage.setItem('Adul2', Adul2);
    localStorage.setItem('Adul3', Adul3);
    localStorage.setItem('Adul4', Adul4);
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleRoom: this.handleRoom,
          handleSubmit: this.handleSubmit,
          handleChangedValue: this.handleChangedValue
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
