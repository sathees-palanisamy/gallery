import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../store/actions';
import './Shop.css';
import { withRouter } from 'react-router';

class Others extends Component {

    constructor(props) {
        super(props);
        this.state = {categories: 'Others'};
        this.handleDetailClick = this.handleDetailClick.bind(this);
        this.handleCategoryClick = this.handleCategoryClick.bind(this);
    }


    handleDetailClick = (imageLink, imageHeading, imagePrice) => {
        console.log('in handleDetailClick');
        this.props.updateData(imageLink, imageHeading, imagePrice)
    }

    handleCategoryClick(event) {
        this.setState({ categories: event.target.value });
        if (event.target.value === 'Goddess') {
        this.props.switchToEmbossed();
        }
        if (event.target.value === 'Decorative Gift') {
            this.props.switchToGift();
        }
        if (event.target.value === 'Others') {
            this.props.switchToOthers();
        }
    }

    render() {
        let renderDisplay;
        
        renderDisplay =  <div class="container">
        <div class="content">
            <nav class="sidebar">
                <ul class="side-nav1">
                    <li class="side-nav1__item" onClick={this.props.switchToEmbossed}>
                        <a href="#" class="side-nav1__link">
                            <span className="side-nav1-font-size">Goddess</span>
                        </a>
                    </li>
                    <li class="side-nav1__item" onClick={this.props.switchToGift}>
                        <a href="#" class="side-nav1__link">
                            <span className="side-nav1-font-size">Decorative Gift</span>
                        </a>
                    </li>
                    <li class="side-nav1__item side-nav1__item--active" onClick={this.props.switchToOthers}>
                        <a href="#" class="side-nav1__link">
                            <span className="side-nav1-font-size">Others</span>
                        </a>
                    </li>
                </ul>

                <div class="legal">
                    &copy; 2020 by Shri Rangaa gallery. All rights reserved.
            </div>
            </nav>

            <div className="CategoriesSelect"> 
            <h2>Categories</h2>
                    <select className="select-css" value={this.state.categories} onChange={this.handleCategoryClick}>
                        <option value="Goddess">Goddess</option>
                        <option value="Decorative Gift">Decorative Gift</option>
                        <option value="Others">Others</option>
                    </select>
                </div>


            <main class="hotel-view">
                <div class="row gallery-showcase">
                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src="resources/Photos/Header/1.jpeg" alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹22,000</div>
                        <h3>Ganesha Antique Gold</h3>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick("resources/Photos/Header/1.jpeg","Ganesha Antique","4000")}>
                        <span >More Details</span>
                        </div>
                    </div>
                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src="resources/Photos/Header/2.jpeg" alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹4,000</div>
                        <h3>Balaji Blue Tanjore</h3>
                        <div onClick={(e) => this.handleDetailClick("resources/Photos/Header/2.jpeg","Balaji Blue Tanjore","4000")}>
                        <span className="btnshop btn-ghost">More Details</span>
                        </div>
                    </div>
                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src="resources/Photos/Header/3.jpeg" alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹4,000</div>
                        <h3>Annam Tanjore</h3>
                        <div onClick={(e) => this.handleDetailClick("resources/Photos/Header/3.jpeg","Annam Tanjore","4000")}>
                        <span className="btnshop btn-ghost">More Details</span>
                        </div>
                    </div>
                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src="resources/Photos/Header/4.jpeg" alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹4,000</div>
                        <h3>Peacock Tanjore</h3>
                        <div onClick={(e) => this.handleDetailClick("resources/Photos/Header/4.jpeg","Peacock Tanjore","4000")}>
                        <span className="btnshop btn-ghost">More Details</span>
                        </div>
                    </div>
                </div>
                <div class="row gallery-showcase">
                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src="resources/Photos/Header/5.jpeg" alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹4,000</div>
                        <h3>Yasodha Krishna</h3>
                        <div onClick={(e) => this.handleDetailClick("resources/Photos/Header/5.jpeg","Yasodha Krishna","4000")}>
                        <span className="btnshop btn-ghost">More Details</span>
                        </div>
                    </div>
                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src="resources/Photos/Header/6.jpeg" alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹4,000</div>
                        <h3>Ganesha Red Curtain</h3>
                        <div onClick={(e) => this.handleDetailClick("resources/Photos/Header/6.jpeg","Ganesha Red Curtain","4000")}>
                        <span className="btnshop btn-ghost">More Details</span>
                        </div>
                    </div>
                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src="resources/Photos/Header/7.jpeg" alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹4,000</div>
                        <h3>Peacock Tanjore</h3>
                        <div onClick={(e) => this.handleDetailClick("resources/Photos/Header/7.jpeg","Peacock Tanjore","4000")}>
                        <span className="btnshop btn-ghost">More Details</span>
                        </div>
                    </div>
                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src="resources/Photos/Header/8.jpeg" alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹4,000</div>
                        <h3>Saraswathi Tanjore</h3>
                        <div onClick={(e) => this.handleDetailClick("resources/Photos/Header/8.jpeg","Saraswathi Tanjore","4000")}>
                        <span className="btnshop btn-ghost">More Details</span>
                        </div>
                    </div>
                </div>
                <div class="row gallery-showcase">
                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src="resources/Photos/Header/9.jpeg" alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹4,000</div>
                        <h3>Balaji Tanjore</h3>
                        <div onClick={(e) => this.handleDetailClick("resources/Photos/Header/9.jpeg","Balaji Tanjore","4000")}>
                        <span className="btnshop btn-ghost">More Details</span>
                        </div>
                    </div>
                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src="resources/Photos/Header/10.jpeg" alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹4,000</div>
                        <h3>Elephant Tanjore</h3>
                        <div onClick={(e) => this.handleDetailClick("resources/Photos/Header/10.jpeg","Elephant Tanjore","4000")}>
                        <span className="btnshop btn-ghost">More Details</span>
                        </div>
                    </div>
                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src="resources/Photos/Header/11.jpeg" alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹4,000</div>
                        <h3>Elephant Tanjore</h3>
                        <div onClick={(e) => this.handleDetailClick("resources/Photos/Header/11.jpeg","Elephant Tanjore","4000")}>
                        <span className="btnshop btn-ghost">More Details</span>
                        </div>
                    </div>
                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src="resources/Photos/Header/12.jpeg" alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹4,000</div>
                        <h3>Gaja Lakshmi</h3>
                        <div onClick={(e) => this.handleDetailClick("resources/Photos/Header/12.jpeg","Gaja Lakshmi<","4000")}>
                        <span className="btnshop btn-ghost">More Details</span>
                        </div>
                    </div>
                </div>

            <div class="row gallery-showcase">
                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src="resources/Photos/Header/13.jpeg" alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹4,000</div>
                        <h3>Peacock Tanjore</h3>
                        <div onClick={(e) => this.handleDetailClick("resources/Photos/Header/13.jpeg","Peacock Tanjore","4000")}>
                        <span className="btnshop btn-ghost">More Details</span>
                        </div>
                    </div>
                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src="resources/Photos/Header/14.jpeg" alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹4,000</div>
                        <h3>Raja Alangaram Murugan</h3>
                        <div onClick={(e) => this.handleDetailClick("resources/Photos/Header/14.jpeg","Raja Alangaram Murugan","4000")}>
                        <span className="btnshop btn-ghost">More Details</span>
                        </div>
                    </div>
                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src="resources/Photos/Header/15.jpeg" alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹4,000</div>
                        <h3>Gaja Lakshmi</h3>
                        <div onClick={(e) => this.handleDetailClick("resources/Photos/Header/15.jpeg","Gaja Lakshmi","4000")}>
                        <span className="btnshop btn-ghost">More Details</span>
                        </div>
                    </div>
                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src="resources/Photos/Header/16.jpeg" alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹4,000</div>
                        <h3>Vennaithazhi Krishna</h3>
                        <div onClick={(e) => this.handleDetailClick("resources/Photos/Header/16.jpeg","Vennaithazhi Krishna","4000")}>
                        <span className="btnshop btn-ghost">More Details</span>
                        </div>
                    </div>
                </div>
            <div class="row gallery-showcase">
                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src="resources/Photos/Header/17.jpeg" alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹4,000</div>
                        <h3>Ganesha Red Curtain</h3>
                        <div onClick={(e) => this.handleDetailClick("resources/Photos/Header/17.jpeg","Ganesha Red Curtain","4000")}>
                        <span className="btnshop btn-ghost">More Details</span>
                        </div>
                    </div>
                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src="resources/Photos/Header/18.jpeg" alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹4,000</div>
                        <h3>Lakshmi Tanjore</h3>
                        <div onClick={(e) => this.handleDetailClick("resources/Photos/Header/18.jpeg","Lakshmi Tanjore","4000")}>
                        <span className="btnshop btn-ghost">More Details</span>
                        </div>
                    </div>
                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src="resources/Photos/Header/19.jpeg" alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹4,000</div>
                        <h3>Ganesha Tanjore</h3>
                        <div onClick={(e) => this.handleDetailClick("resources/Photos/Header/19.jpeg","Ganesha Tanjore","4000")}>
                        <span className="btnshop btn-ghost">More Details</span>
                        </div>
                    </div>
                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src="resources/Photos/Header/20.jpeg" alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹4,000</div>
                        <h3>Saraswathi Tanjore</h3>
                        <div onClick={(e) => this.handleDetailClick("resources/Photos/Header/20.jpeg","Saraswathi Tanjore","4000")}>
                        <span className="btnshop btn-ghost">More Details</span>
                        </div>
                    </div>
                </div>
            </main>
        
        </div>
    </div>

        return (
            renderDisplay
         );
    }
}

const mapStateToProps = (state) => {
    return {
        renderUiPage: state.pageTag.uiPage,
        renderUiShop: state.pageTag.uiShop
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateData: (imageLink, imageHeading, imagePrice) => dispatch(actions.updateData(imageLink, imageHeading, imagePrice)),
        switchToEmbossed: () => dispatch({ type: 'SWITCH_TO_EMBOSSED' }),
        switchToGift: () => dispatch({ type: 'SWITCH_TO_GIFT' }),
        switchToOthers: () => dispatch({ type: 'SWITCH_TO_OTHERS' }),
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Others));