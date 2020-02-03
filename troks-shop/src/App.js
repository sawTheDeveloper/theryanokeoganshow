import React, { Component } from 'react';
import './App.css';
import Products from './components/products';
import Filter from './components/filter';
import Basket from './components/basket';
import {Provider} from 'react-redux';
import store from './store';

class App extends Component {

  componentWillMount(){
    fetch("http://localhost:8000/products").then(res => res.json())
    .then(data => this.setState({
      products: data,
      filteredProducts: data
    }));
    if(localStorage.getItem('cartItems')){
      this.setState({cartItems: JSON.parse(localStorage.getItem('cartItems'))});
    }
  }
  render() {
    return (
      <Provider store={store}>
      <div className="container">
        <h1>Store</h1>
        <hr/>
          <div className="row">
            <div className="col-md-8">
              <Filter />
              <hr />
              <Products />
            </div>
            <div className="col-md-4">
              <Basket />  
            </div>
          </div>
      </div>
      </Provider>
    )
  }
}

export default App;
