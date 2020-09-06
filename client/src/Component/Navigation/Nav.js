import React, { Component } from 'react';
import Auxillary from './Auxillary';

class Nav extends Component {
    render() {
      return (
        <Auxillary>
          <div className="fixed-nav">
    
            <h1>Shri Rangaa Tanjore Art</h1>
         
            <div className="Header-input">
            <input type="text" name="searchitem" id="searchitem" placeholder="Search"  />
            <i className="ion-ios-search icon-small-black search-icon-position"></i>
            </div>
            <img src="resources/favicons/hamburger.png" alt="hamburger logo" className="hamburger" onClick={this.props.drawerToggleClicked} />

            <nav>
                  <ul className="main-nav">
                     <li>
                     <i className="ion-ios-home icon-small "></i>
                      <a href="/" >Home</a>
                     </li>
                     <li>
                     <i className="ion-ios-photos icon-small "></i>
                      <a href="/shop" >Shop</a>
                     </li>
                     <li>
                     <i className="ion-ios-pricetag icon-small "></i>
                      <a href="/orders" >Orders</a>
                     </li>
                     <li>
                       <i className="ion-ios-basket icon-small"></i>
                       <a href="/basket" >Basket</a>
                     </li>
                     <li>
                      <i className="ion-ios-call icon-small"></i>
                       <a href="/contact" >Contact Us</a>
                     </li>
                  </ul>
           </nav>
      
           </div>
           </Auxillary>
      );
    }
  }
  
  export default Nav;
  