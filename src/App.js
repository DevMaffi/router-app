import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './components/navbar';
import Products from './components/products';
import Posts from './components/posts';
import Home from './components/home';
import Dashboard from './components/admin/dashboard';
import ProductDetails from './components/productDetails';
import NotFound from './components/notFound';

class App extends Component {
  state = {
    counter: 0,
  };

  handleIncrement = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
  };

  render() {
    return (
      <div>
        <NavBar />
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrement}>INCREMENT</button>
        <div className="content">
          <Switch>
            <Route path="/admin" component={Dashboard} />
            <Route
              path="/products"
              render={props => <Products sortBy="newest" {...props} />}
            />
            <Route path="/posts" component={Posts} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
