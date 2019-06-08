import React, { Component } from 'react';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  render() {
    <ProductContext.Provider value="Hello from context">
      {this.props.children}
    </ProductContext.Provider>;
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
