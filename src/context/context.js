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
    console.log(room);
    const newRoom = room;
    this.setState({
      [room]: !this.state[newRoom]
    });
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
