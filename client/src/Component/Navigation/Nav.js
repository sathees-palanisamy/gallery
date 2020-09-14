import React, { Component } from 'react';
import Auxillary from './Auxillary';
import { connect } from 'react-redux';

class Nav extends Component {
    render() {
      let mobIcon;
      if (!this.props.iconClicked) {
        mobIcon = <img src="resources/favicons/hamburger.png" alt="hamburger logo" className="hamburger" onClick={this.props.drawerToggleClicked} />
      }  else {
        mobIcon =  <img src="resources/favicons/x.png" alt="hamburger logo" className="hamburger" onClick={this.props.drawerToggleClicked} />

      }

      return (
        <Auxillary>
          <div className="fixed-nav">
    
            <h1>Shri Rangaa Tanjore Art</h1>
         
            <div className="Header-input">
            <input type="text" name="searchitem" id="searchitem" placeholder="Search"  />
            <i className="ion-ios-search icon-small-black search-icon-position" onClick={this.props.switchToSearch}></i>
            </div>
            {mobIcon}
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
                     <i className="ion-ios-car icon-small "></i>
                      <a href="/shipping" >Shipping</a>
                     </li>
                     <li>
                     <i className="ion-ios-pricetag icon-small "></i>
                      <a href="/about" >About</a>
                     </li>
                     <li>
                      <i className="ion-ios-call icon-small"></i>
                       <a href="/contact" >Contact</a>
                     </li>
                  </ul>
           </nav>
      
           </div>
           </Auxillary>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
        renderUiPage: state.pageTag.uiPage,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      switchToSearch: () => dispatch({ type: 'SWITCH_TO_SEARCH' })
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Nav);
  
  