import React, { Component } from 'react';
import { roomData } from './roomData';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    room1: true,
    room2: false,
    room3: false,
    room4: false
  };
  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();
  }
  componentWillUpdate(extProps, nextState) {}

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
        room4: false
      });
    }
    if (room === 'room3') {
      this.setState({
        room2: true,
        room3: !this.state.room3,
        room4: false
      });
    }
    if (room === 'room4') {
      this.setState({
        room2: true,
        room3: true,
        room4: !this.state.room4
      });
    }
  };
  handleSubmit = () => {
    const { room1, room2, room3, room4 } = this.state;
    localStorage.setItem('room1', room1);
    localStorage.setItem('room2', room2);

    localStorage.setItem('room3', room3);

    localStorage.setItem('room4', room4);
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleRoom: this.handleRoom,
          handleSubmit: this.handleSubmit
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
