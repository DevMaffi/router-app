import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NavBar from './components/navbar';
import Products from './components/products';
import Posts from './components/posts';
import Home from './components/home';
import Dashboard from './components/admin/dashboard';
import ProductDetails from './components/productDetails';
import NotFound from './components/notFound';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Route path="/" component={Home} />
          <Route path="/admin" component={Dashboard} />
          <Route path="/products" component={Products} />
          <Route path="/posts" component={Posts} />
        </div>
      </div>
    );
  }
}

export default App;
