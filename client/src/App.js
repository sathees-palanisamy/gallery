import React, { Component } from 'react';
import Nav from './Component/Navigation/Nav';
import Home from './Component/Home/Home';
import SideDrawer from './Component/Navigation/sideDrawer';
import Shop from './Component/Shop/Shop';
import Orders from './Component/Orders/Orders';
import Basket from './Component/Basket/Basket';
import Contact from './Component/Contact/Contact';
import { Route, Switch } from 'react-router-dom';

import './App.css';

/* updated CSS File */

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      renderUi: 'initial',
      showSideDrawer: false,
    };
  }

  sideDrawerClosedHandler = () => {
    this.setState( { showSideDrawer: false } );
  }

  sideDrawerToggleHandler = () => {
    this.setState( ( prevState ) => {
        return { showSideDrawer: !prevState.showSideDrawer };
    } );
   }

   backDropToggle = () => {
    this.setState( ( prevState ) => {
      return { showSideDrawer: !prevState.showSideDrawer };
      } );
   }

  render() {
    return (
      <>
        <Nav gralleryClick={this.gralleryClick} drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
          gralleryClick={this.gralleryClick}
          backDropToggle={this.backDropToggle}
        />
         <Switch>
          <Route path="/" exact render={(props) =>
            <Home
            />
          }
          />
          <Route path="/shop" render={(props) =>
            <Shop
            />
          }
          />
          <Route path="/orders" render={(props) =>
            <Orders
              {...props}
            />
          }
          />
          <Route path="/basket" render={(props) =>
            <Basket
              {...props}
            />
          }
          />
          <Route path="/contact" render={(props) =>
            <Contact
              {...props}
            />
          }
          />
        </Switch>
      </>
    );
  }
}

export default App;
