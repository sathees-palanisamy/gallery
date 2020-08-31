import React from 'react';

const Backdrop = (props) => (
  props.show ?
    <div className="Backdrop">
      <div className="subTitle">
        <p><b>South Indian classical art</b></p>
      </div>
      <ul className="side-nav">

        <li>
          <i className="ion-ios-log-in icon-small"></i>
          <a href="#" onClick={props.backDropToggle} ><b>Sign in</b></a>
        </li>
        <li>
          <i className="ion-ios-home icon-small"></i>
          <a href="#" onClick={props.backDropToggle} ><b>Home</b></a>
        </li>
        <li>
          <i className="ion-ios-pricetag icon-small"></i>
          <a href="#about" onClick={props.backDropToggle} ><b>Orders</b></a>
        </li>
        <li>
          <i className="ion-ios-basket icon-small"></i>
          <a href="#gallery" onClick={props.gralleryClick}><b>Basket</b></a>
        </li>
        <li>
          <i className="ion-ios-call icon-small"></i>
          <a href="#testimonals" onClick={props.backDropToggle} ><b>Contact Us</b></a>
        </li>
      </ul>
    </div>
    : null
);

export default Backdrop;