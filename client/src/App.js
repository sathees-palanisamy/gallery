import React, { Component } from 'react';
import Nav from './Component/Navigation/Nav';
import Home from './Component/Home/Home';
import SideDrawer from './Component/Navigation/sideDrawer';
import Shop from './Component/Shop/Shop';
import About from './Component/About/About';
import Shipping from './Component/Shipping/Shipping';
import Contact from './Component/Contact/Contact';
import { Route, Switch } from 'react-router-dom';
import Detail from './Component/Detail/Detail';

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
          <Route path="/shipping" render={(props) =>
            <Shipping
              {...props}
            />
          }
          />
          <Route path="/about" render={(props) =>
            <About
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
          <Route path="/detail" render={(props) =>
            <Detail
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
