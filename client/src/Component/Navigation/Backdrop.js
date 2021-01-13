import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const Backdrop = (props) => (
  props.show ?
    <div className="Backdrop" >
      <div className="subTitle" >
        <p><b>South Indian classical art</b></p>
      </div>
      <ul className="side-nav" onClick={props.backDropToggle} >
        <li onClick={props.switchToHome}>
          <i className="ion-ios-home icon-small"></i>
          <Link to="/">Home</Link>
        </li>
        <li>
          <i className="ion-ios-photos icon-small "></i>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <i className="ion-ios-car icon-small "></i>
          <Link to="/shipping">Shipping</Link>
        </li>
        <li >
          <i className="ion-ios-basket icon-small"></i>
          <Link to="/basket">basket</Link>
        </li>
        <li>
          <i className="ion-ios-call icon-small"></i>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
    : null
);

const mapDispatchToProps = dispatch => {
  return {
    switchToHome: () => dispatch({ type: 'SWITCH_TO_HOME' }),
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Backdrop));