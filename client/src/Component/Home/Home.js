import React, { Component } from 'react';
import ImageRenderer from '../util/ImageRenderer';
import Footer from '../Footer/FooterPage';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Home.CSS';
import { withRouter } from 'react-router';

const images = [
  { src: "resources/Photos/Header/1.jpeg" },
  { src: "resources/Photos/Header/2.jpeg" },
  { src: "resources/Photos/Header/3.jpeg" },
  { src: "resources/Photos/Header/4.jpeg" },
  { src: "resources/Photos/Header/5.jpeg" },
  { src: "resources/Photos/Header/6.jpeg" },
  { src: "resources/Photos/Header/7.jpeg" },
  { src: "resources/Photos/Header/8.jpeg" },
  { src: "resources/Photos/Header/11.jpeg" },
  { src: "resources/Photos/Header/13.jpeg" },
  { src: "resources/Photos/Header/16.jpeg" },
  { src: "resources/Photos/Header/17.jpeg" },
];

class Home extends Component {
  render() {
    let uiRender;

    if (this.props.renderUiPage === '') {
      uiRender = <div>

        <div className="row">
          <h2 className="header-color"><b>Welcome to Shri Rangaa Tanjore Art Gallery</b></h2>
        </div>
        <div className="row">


          <div className="col span-1-of-2 imagebackground">

            <img src="resources/Photos/Header/2.jpeg" alt="Home Image" className="app-screen1" />

          </div>

          <div className="col span-1-of-2 padding-card">
            <div className="hcard">
              <div className="hcard__side hcard__side--front">
                <br></br>
                <p class="long-copy">Tanjore paintings are made by skilled artisans with lot of dedication, which last for many generations. Our Tanjore painting are adorning the walls of pooja rooms, receptions, offices and are gifted to family & friends on special occassions. </p>
                <br></br>
                <div class="long-copy">
                  <ul>
                    <li><b>17 Years of experience</b></li>
                    <li><b>Good quality raw materials are used in making</b></li>
                    <li><b>Direct from artisans</b></li>
                    <li><b>Handcrafted items</b></li>
                    <li><b>Prompt Delivery</b></li>
                  </ul>
                </div>

                <br></br>
                <br></br>
                <div className="btnpos">
                  <button href="/shop" className="btnhome" onClick={this.props.switchToShopPage} >Shop now!</button>
                </div>
              </div>
            </div>
          </div>

        </div>


        <br></br>

        <div className="row">
          <div class="story">
            <figure class="story__shape">
                            <img src="resources/Photos/contact.png" alt="Person on a tour" class="story__img"/>
                        </figure>
            <div class="story__text">
              <h3 class="heading-tertiary u-margin-bottom-small">Quick Connect</h3>
              <span >
                <a href="https://wa.me/919003474248" className="whatsupplink">WhatsApp Chat</a>
              </span>
              <span >
                <i className="ion-md-call icon-small "></i>
                <span>&nbsp;&nbsp;+91 9003474248</span>
              </span>
              <span>
                <p>
                  <i className="ion-ios-mail icon-small "></i>
                  &nbsp;&nbsp;shrirangaagallery@gmail.com
            </p>
              </span>
            </div>
          </div>
        </div>
        <br></br>

        <div className="row">
          <div class="story">
          <figure class="story__shape">
                            <img src="resources/Photos/shipping.jpg" alt="Person on a tour" class="story__img"/>
                        </figure>
            <div class="story__text">
            <br></br>
           <br></br>
              <h3 class="heading-tertiary u-margin-bottom-small">Free Shipping</h3>
              <br></br>
              <span>
                <i className="ion-ios-car icon-small"></i>
                <span>&nbsp;&nbsp;Free Surface shipping All over India & 24/7 Service</span>
              </span>
              <br></br>
              <br></br>
              
            </div>
          </div>
        </div>

        <br></br>

        <div className="row">
          <div class="story">
          <figure class="story__shape">
                            <img src="resources/Photos/bank.jpg" alt="Person on a tour" class="story__img"/>
                        </figure>
            <div class="story__text">
            <br></br>
           <br></br>
              <h3 class="heading-tertiary u-margin-bottom-small">Bank Account Details</h3>
              <br></br>
              <ul>
                                <li>Account Name: Shri Rangaa</li>
                                <li>IFSC Code   : IFSC0001 </li>
                                <li>Account No  : 463846346364638 </li>
                            </ul>
              
            </div>
          </div>
        </div>


        <br></br>
        <br></br>
        <Footer />
      </div>

    }

    if (this.props.renderUiPage === 'shop') {
      uiRender = <Redirect to="/shop" />
    }

    if (this.props.renderUiPage === 'search') {
      uiRender = <Redirect to="/search" />
    }


    return (
      uiRender
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
    switchToShopPage: () => dispatch({ type: 'SWITCH_TO_SHOP' })
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
