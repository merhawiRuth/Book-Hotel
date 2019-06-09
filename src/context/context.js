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
  handleRoom = room => {
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
  render() {
    return (
      <ProductContext.Provider
        value={{ ...this.state, handleRoom: this.handleRoom }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
