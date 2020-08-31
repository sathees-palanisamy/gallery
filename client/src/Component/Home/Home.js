import React, { Component } from 'react';
import ImageRenderer from '../util/ImageRenderer';
import Footer from '../Footer/FooterPage';

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
    return (
      <div>

        <div className="header-flex">
          <div className="header-img">
            <ImageRenderer initialStep={1} images={images} />
          </div>
          <div>
            <h2>Welcome to our Gallery</h2>
            <p class="long-copy">Tanjore paintings are made by skilled artisans with lot of dedication, which last for many generations. Our Tanjore painting are adorning the walls of pooja rooms,receptions,offices and are gifted to family & friends on special occassions. </p>
            <br></br>
            <div class="long-copy">
            <ul>
              <li><b>17 Years of experience</b></li>
              <li><b>Good quality raw materials are used in making</b></li>
              <li><b>Prompt Delivery</b></li>
            </ul>
            </div>
          </div>
        </div>

        <div >

          <div class="row">
            <div class="col span-1-of-3 padding-card">
              <div class="card">
                <div class="card__side card__side--front">
                  <div class="card__picture card__picture--1">
                    &nbsp;
                </div>
                  <h4 class="card__heading">
                    <span class="card__heading-span card__heading-span--1">3D Embossed</span>
                  </h4>
                  <div class="card__details">
                    <ul>
                      <li>Free Delivery</li>
                      <li>10% Discount</li>
                    </ul>
                    <button className="btn btn1-color">Shop now!</button>
                  </div>
                </div>
              </div>
            </div>


            <div class="col span-1-of-3 padding-card">
              <div class="card">
                <div class="card__side card__side--front">
                  <div class="card__picture card__picture--2">
                    &nbsp;
                </div>
                  <h4 class="card__heading card__heading-span--2">
                    <span>Decorative Gift</span>
                  </h4>
                  <div class="card__details">
                    <ul>
                      <li>Free Delivery</li>
                      <li>10% Discount</li>
                    </ul>
                    <button className="btn btn2-color">Shop now!</button>
                  </div>

                </div>

              </div>
            </div>


            <div class="col span-1-of-3 padding-card">
              <div class="card">
                <div class="card__side card__side--front">
                  <div class="card__picture card__picture--3">
                    &nbsp;
                </div>
                  <h4 class="card__heading card__heading-span--3">
                    <span>Other</span>
                  </h4>
                  <div class="card__details">
                    <ul>
                      <li>Free Delivery</li>
                      <li>10% Discount</li>
                    </ul>
                    <button className="btn btn3-color">Shop now!</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
