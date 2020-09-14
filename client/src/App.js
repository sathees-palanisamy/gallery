import React, { Component } from 'react';
import Nav from './Component/Navigation/Nav';
import Home from './Component/Home/Home';
import SideDrawer from './Component/Navigation/sideDrawer';
import Shop from './Component/Shop/Shop';
import About from './Component/About/About';
import Shipping from './Component/Shipping/Shipping';
import Contact from './Component/Contact/Contact';
import { Route, Switch } from 'react-router-dom';
import Search from './Component/Search/Search';


import './App.css';

/* updated CSS File */

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      renderUi: 'initial',
      showSideDrawer: false,
      iconClicked: false
    };
  }

  sideDrawerClosedHandler = () => {
    this.setState( { showSideDrawer: false } );
  }

  sideDrawerToggleHandler = () => {
    this.setState( ( prevState ) => {
        return { showSideDrawer: !prevState.showSideDrawer };
    } );
    this.setState( ( prevState ) => {
      return { iconClicked: !prevState.iconClicked };
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
        <Nav gralleryClick={this.gralleryClick} drawerToggleClicked={this.sideDrawerToggleHandler} showSideDrawer={this.props.showSideDrawer}  iconClicked={this.state.iconClicked}/>
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
          <Route path="/search" render={(props) =>
            <Search
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
