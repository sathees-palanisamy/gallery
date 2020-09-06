import React from 'react';

const Backdrop = (props) => (
  props.show ?
    <div className="Backdrop">
      <div className="subTitle">
        <p><b>South Indian classical art</b></p>
      </div>
      <ul className="side-nav">
        <li>
          <i className="ion-ios-home icon-small"></i>
          <a href="/" onClick={props.backDropToggle} ><b>Home</b></a>
        </li>
        <li>
          <i className="ion-ios-photos icon-small "></i>
          <a href="/shop" onClick={props.backDropToggle} ><b>Shop</b></a>
        </li>
        <li>
          <i className="ion-ios-car icon-small "></i>
          <a href="/shipping" onClick={props.gralleryClick}><b>Shipping</b></a>
        </li>
        <li>
          <i className="ion-ios-pricetag icon-small "></i>
          <a href="/about" onClick={props.backDropToggle} ><b>About</b></a>
        </li>
        <li>
          <i className="ion-ios-call icon-small"></i>
          <a href="/contact"  onClick={props.backDropToggle} ><b>Contact</b></a>
        </li>
      </ul>
    </div>
    : null
);

export default Backdrop;