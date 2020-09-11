import React, { Component } from 'react';
import './Shop.css';

class Shop extends Component {

    render() {
        let renderDisplay;

        return (
            <div class="container">


                <div class="content">
                    <nav class="sidebar">
                        <ul class="side-nav1">
                            <li class="side-nav1__item">
                                <a href="#" class="side-nav1__link">
                                    <span className="side-nav1-font-size">3D EMBOSSED</span>
                                </a>
                            </li>
                            <li class="side-nav1__item">
                                <a href="#" class="side-nav1__link">
                                    <span className="side-nav1-font-size">DECORATIVE GIFT</span>
                                </a>
                            </li>
                            <li class="side-nav1__item">
                                <a href="#" class="side-nav1__link">
                                    <span className="side-nav1-font-size">OTHERS</span>
                                </a>
                            </li>
                        </ul>

                        <div class="legal">
                            &copy; 2020 by Shri Rangaa gallery. All rights reserved.
                    </div>
                    </nav>

                    <main class="hotel-view">
                        <div class="row gallery-showcase">
                            <div className="col span-1-of-4 GalleryBoxSize">
                                <figure className="gallery-photo">
                                    <img src="resources/Photos/Header/1.jpeg" alt="Fashion" onClick={this.props.fashionClick} />
                                </figure>
                                <div className="btn-full" onClick={this.props.fashionClick}>From ₹6,500.00</div>
                                <h3>Balaji Blue Tanjore</h3>
                                <a className="btnshop btn-ghost" href="/detail">More Details</a>
                            </div>
                            <div className="col span-1-of-4 GalleryBoxSize">
                                <figure className="gallery-photo">
                                    <img src="resources/Photos/Header/2.jpeg" alt="Fashion" onClick={this.props.fashionClick} />
                                </figure>
                                <div className="btn-full" onClick={this.props.fashionClick}>From ₹6,500.00</div>
                                <h3>Balaji Blue Tanjore</h3>
                                <a className="btnshop btn-ghost" href="/detail">More Details</a>
                            </div>
                            <div className="col span-1-of-4 GalleryBoxSize">
                                <figure className="gallery-photo">
                                    <img src="resources/Photos/Header/3.jpeg" alt="Fashion" onClick={this.props.fashionClick} />
                                </figure>
                                <div className="btn-full" onClick={this.props.fashionClick}>From ₹6,500.00</div>
                                <h3>Balaji Blue Tanjore</h3>
                                <a className="btnshop btn-ghost" href="/detail">More Details</a>
                            </div>
                            <div className="col span-1-of-4 GalleryBoxSize">
                                <figure className="gallery-photo">
                                    <img src="resources/Photos/Header/4.jpeg" alt="Fashion" onClick={this.props.fashionClick} />
                                </figure>
                                <div className="btn-full" onClick={this.props.fashionClick}>From ₹6,500.00</div>
                                <h3>Balaji Blue Tanjore</h3>
                                <a className="btnshop btn-ghost" href="/detail">More Details</a>
                            </div>
                        </div>
                        <div class="row gallery-showcase">
                            <div className="col span-1-of-4 GalleryBoxSize">
                                <figure className="gallery-photo">
                                    <img src="resources/Photos/Header/5.jpeg" alt="Fashion" onClick={this.props.fashionClick} />
                                </figure>
                                <div className="btn-full" onClick={this.props.fashionClick}>From ₹6,500.00</div>
                                <h3>Balaji Blue Tanjore</h3>
                                <a className="btnshop btn-ghost" href="/detail">More Details</a>
                            </div>
                            <div className="col span-1-of-4 GalleryBoxSize">
                                <figure className="gallery-photo">
                                    <img src="resources/Photos/Header/6.jpeg" alt="Fashion" onClick={this.props.fashionClick} />
                                </figure>
                                <div className="btn-full" onClick={this.props.fashionClick}>From ₹6,500.00</div>
                                <h3>Balaji Blue Tanjore</h3>
                                <a className="btnshop btn-ghost" href="/detail">More Details</a>
                            </div>
                            <div className="col span-1-of-4 GalleryBoxSize">
                                <figure className="gallery-photo">
                                    <img src="resources/Photos/Header/7.jpeg" alt="Fashion" onClick={this.props.fashionClick} />
                                </figure>
                                <div className="btn-full" onClick={this.props.fashionClick}>From ₹6,500.00</div>
                                <h3>Balaji Blue Tanjore</h3>
                                <a className="btnshop btn-ghost" href="/detail">More Details</a>
                            </div>
                            <div className="col span-1-of-4 GalleryBoxSize">
                                <figure className="gallery-photo">
                                    <img src="resources/Photos/Header/8.jpeg" alt="Fashion" onClick={this.props.fashionClick} />
                                </figure>
                                <div className="btn-full" onClick={this.props.fashionClick}>From ₹6,500.00</div>
                                <h3>Balaji Blue Tanjore</h3>
                                <a className="btnshop btn-ghost" href="/detail">More Details</a>
                            </div>
                        </div>
                        <div class="row gallery-showcase">
                            <div className="col span-1-of-4 GalleryBoxSize">
                                <figure className="gallery-photo">
                                    <img src="resources/Photos/Header/9.jpeg" alt="Fashion" onClick={this.props.fashionClick} />
                                </figure>
                                <div className="btn-full" onClick={this.props.fashionClick}>From ₹6,500.00</div>
                                <h3>Balaji Blue Tanjore</h3>
                                <a className="btnshop btn-ghost" href="/detail">More Details</a>
                            </div>
                            <div className="col span-1-of-4 GalleryBoxSize">
                                <figure className="gallery-photo">
                                    <img src="resources/Photos/Header/10.jpeg" alt="Fashion" onClick={this.props.fashionClick} />
                                </figure>
                                <div className="btn-full" onClick={this.props.fashionClick}>From ₹6,500.00</div>
                                <h3>Balaji Blue Tanjore</h3>
                                <a className="btnshop btn-ghost" href="/detail">More Details</a>
                            </div>
                            <div className="col span-1-of-4 GalleryBoxSize">
                                <figure className="gallery-photo">
                                    <img src="resources/Photos/Header/11.jpeg" alt="Fashion" onClick={this.props.fashionClick} />
                                </figure>
                                <div className="btn-full" onClick={this.props.fashionClick}>From ₹6,500.00</div>
                                <h3>Balaji Blue Tanjore</h3>
                                <a className="btnshop btn-ghost" href="/detail">More Details</a>
                            </div>
                            <div className="col span-1-of-4 GalleryBoxSize">
                                <figure className="gallery-photo">
                                    <img src="resources/Photos/Header/12.jpeg" alt="Fashion" onClick={this.props.fashionClick} />
                                </figure>
                                <div className="btn-full" onClick={this.props.fashionClick}>From ₹6,500.00</div>
                                <h3>Balaji Blue Tanjore</h3>
                                <a className="btnshop btn-ghost" href="/detail">More Details</a>
                            </div>
                        </div>

                    <div class="row gallery-showcase">
                            <div className="col span-1-of-4 GalleryBoxSize">
                                <figure className="gallery-photo">
                                    <img src="resources/Photos/Header/13.jpeg" alt="Fashion" onClick={this.props.fashionClick} />
                                </figure>
                                <div className="btn-full" onClick={this.props.fashionClick}>From ₹6,500.00</div>
                                <h3>Balaji Blue Tanjore</h3>
                                <a className="btnshop btn-ghost" href="/detail">More Details</a>
                            </div>
                            <div className="col span-1-of-4 GalleryBoxSize">
                                <figure className="gallery-photo">
                                    <img src="resources/Photos/Header/14.jpeg" alt="Fashion" onClick={this.props.fashionClick} />
                                </figure>
                                <div className="btn-full" onClick={this.props.fashionClick}>From ₹6,500.00</div>
                                <h3>Balaji Blue Tanjore</h3>
                                <a className="btnshop btn-ghost" href="/detail">More Details</a>
                            </div>
                            <div className="col span-1-of-4 GalleryBoxSize">
                                <figure className="gallery-photo">
                                    <img src="resources/Photos/Header/15.jpeg" alt="Fashion" onClick={this.props.fashionClick} />
                                </figure>
                                <div className="btn-full" onClick={this.props.fashionClick}>From ₹6,500.00</div>
                                <h3>Balaji Blue Tanjore</h3>
                                <a className="btnshop btn-ghost" href="/detail">More Details</a>
                            </div>
                            <div className="col span-1-of-4 GalleryBoxSize">
                                <figure className="gallery-photo">
                                    <img src="resources/Photos/Header/16.jpeg" alt="Fashion" onClick={this.props.fashionClick} />
                                </figure>
                                <div className="btn-full" onClick={this.props.fashionClick}>From ₹6,500.00</div>
                                <h3>Balaji Blue Tanjore</h3>
                                <a className="btnshop btn-ghost" href="/detail">More Details</a>
                            </div>
                        </div>
                    <div class="row gallery-showcase">
                            <div className="col span-1-of-4 GalleryBoxSize">
                                <figure className="gallery-photo">
                                    <img src="resources/Photos/Header/17.jpeg" alt="Fashion" onClick={this.props.fashionClick} />
                                </figure>
                                <div className="btn-full" onClick={this.props.fashionClick}>From ₹6,500.00</div>
                                <h3>Balaji Blue Tanjore</h3>
                                <a className="btnshop btn-ghost" href="/detail">More Details</a>
                            </div>
                            <div className="col span-1-of-4 GalleryBoxSize">
                                <figure className="gallery-photo">
                                    <img src="resources/Photos/Header/18.jpeg" alt="Fashion" onClick={this.props.fashionClick} />
                                </figure>
                                <div className="btn-full" onClick={this.props.fashionClick}>From ₹6,500.00</div>
                                <h3>Balaji Blue Tanjore</h3>
                                <a className="btnshop btn-ghost" href="/detail">More Details</a>
                            </div>
                            <div className="col span-1-of-4 GalleryBoxSize">
                                <figure className="gallery-photo">
                                    <img src="resources/Photos/Header/19.jpeg" alt="Fashion" onClick={this.props.fashionClick} />
                                </figure>
                                <div className="btn-full" onClick={this.props.fashionClick}>From ₹6,500.00</div>
                                <h3>Balaji Blue Tanjore</h3>
                                <a className="btnshop btn-ghost" href="/detail">More Details</a>
                            </div>
                            <div className="col span-1-of-4 GalleryBoxSize">
                                <figure className="gallery-photo">
                                    <img src="resources/Photos/Header/20.jpeg" alt="Fashion" onClick={this.props.fashionClick} />
                                </figure>
                                <div className="btn-full" onClick={this.props.fashionClick}>From ₹6,500.00</div>
                                <h3>Balaji Blue Tanjore</h3>
                                <a className="btnshop btn-ghost" href="/detail">More Details</a>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

export default Shop;
