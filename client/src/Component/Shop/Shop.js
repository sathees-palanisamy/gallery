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
                            <li class="side-nav1__item side-nav1__item--active">
                                <a href="#" class="side-nav1__link">
                                    <svg class="side-nav1__icon">

                                    </svg>
                                    <span className="side-nav1-font-size">3D EMBOSSED</span>
                                </a>
                            </li>
                            <li class="side-nav1__item">
                                <a href="#" class="side-nav1__link">
                                    <svg class="side-nav1__icon">

                                    </svg>
                                    <span className="side-nav1-font-size">DECORATIVE</span>
                                </a>
                            </li>
                            <li class="side-nav1__item">
                                <a href="#" class="side-nav1__link">
                                    <svg class="side-nav1__icon">

                                    </svg>
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
                            <div className="col GalleryBoxSize">
                                <figure className="gallery-photo">
                                    <img src="resources/Photos/Header/1.jpeg" alt="Fashion" onClick={this.props.fashionClick} />
                                </figure>
                                <div className="btn-full" onClick={this.props.fashionClick}>From ₹6,500.00</div>
                                <h3>Balaji Blue Tanjore</h3>
                            </div>
                            <div className="col GalleryBoxSize">
                                <figure className="gallery-photo">
                                    <img src="resources/Photos/Header/2.jpeg" alt="Events" onClick={this.props.eventClick} />
                                </figure>
                                <div className="btn-full" onClick={this.props.eventClick}>From ₹6,500.00</div>
                                <h3>Balaji Blue Tanjore</h3>
                            </div>
                            <div className="col GalleryBoxSize">
                                <figure className="gallery-photo">
                                    <img src="resources/Photos/Header/3.jpeg" alt="Weddings" onClick={this.props.weddingClick} />
                                </figure>
                                <div className="btn-full" onClick={this.props.weddingClick}>From ₹6,500.00</div>
                                <h3>Balaji Blue Tanjore</h3>
                            </div>
                            <div className="col GalleryBoxSize">
                                <figure className="gallery-photo">
                                    <img src="resources/Photos/Header/4.jpeg" alt="Pre(Post)Wedding" onClick={this.props.prePostClick} />
                                </figure>
                                <div className="btn-full" onClick={this.props.prePostClick}>From ₹6,500.00</div>
                                <h3>Balaji Blue Tanjore</h3>
                            </div>
                            <div className="col GalleryBoxSize">
                                <figure className="gallery-photo">
                                    <img src="resources/Photos/Header/4.jpeg" alt="Pre(Post)Wedding" onClick={this.props.prePostClick} />
                                </figure>
                                <div className="btn-full" onClick={this.props.prePostClick}>From ₹6,500.00</div>
                                <h3>Balaji Blue Tanjore</h3>
                            </div>
                            <div className="col GalleryBoxSize">
                                <figure className="gallery-photo">
                                    <img src="resources/Photos/Header/4.jpeg" alt="Pre(Post)Wedding" onClick={this.props.prePostClick} />
                                </figure>
                                <div className="btn-full" onClick={this.props.prePostClick}>From ₹6,500.00</div>
                                <h3>Balaji Blue Tanjore</h3>
                            </div>
                        </div>

                    </main>
                </div>
            </div>
        );
    }
}

export default Shop;
