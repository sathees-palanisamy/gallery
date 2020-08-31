import React, { Component } from 'react';
import Nav from './Component/Navigation/Nav';
import Home from './Component/Home/Home';
import SideDrawer from './Component/Navigation/sideDrawer';


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
        <Home />
      </>
    );
  }
}

export default App;
