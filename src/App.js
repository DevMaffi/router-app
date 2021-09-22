import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

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
            <Route path="/products/:id" component={ProductDetails} />
            <Route
              path="/products"
              render={props => <Products sortBy="newest" {...props} />}
            />
            <Route path="/posts/:year?/:month?" component={Posts} />
            <Redirect from="/messages" to="/posts" />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
