import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../store/actions';
import './Shop.css';
import Detail from '../Detail/Detail';

class Embossed extends Component {

    constructor(props) {
        super(props);
        this.handleDetailClick = this.handleDetailClick.bind(this);
    }


    handleDetailClick = (imageLink, imageHeading, imagePrice) => {
        console.log('in handleDetailClick');
        this.props.updateData(imageLink, imageHeading, imagePrice)
    }

    render() {
        let renderDisplay;
        
        renderDisplay =  <div class="container">
        <div class="content">
            <nav class="sidebar">
                <ul class="side-nav1">
                    <li class="side-nav1__item side-nav1__item--active" onClick={this.props.switchToEmbossed}>
                        <a href="#" class="side-nav1__link">
                            <span className="side-nav1-font-size">Goddess</span>
                        </a>
                    </li>
                    <li class="side-nav1__item" onClick={this.props.switchToGift}>
                        <a href="#" class="side-nav1__link">
                            <span className="side-nav1-font-size">Decorative Gift</span>
                        </a>
                    </li>
                    <li class="side-nav1__item" onClick={this.props.switchToOthers}>
                        <a href="#" class="side-nav1__link">
                            <span className="side-nav1-font-size">Others</span>
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
                            <img src="resources/Photos/Header/20.jpeg" alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹4,000</div>
                        <h3>Saraswathi Tanjore</h3>
                        <div onClick={(e) => this.handleDetailClick("resources/Photos/Header/20.jpeg","Saraswathi Tanjore","4000")}>
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
                            <img src="resources/Photos/Header/5.jpeg" alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹4,000</div>
                        <h3>Yasodha Krishna</h3>
                        <div onClick={(e) => this.handleDetailClick("resources/Photos/Header/5.jpeg","Yasodha Krishna","4000")}>
                        <span className="btnshop btn-ghost">More Details</span>
                        </div>
                    </div>
                </div>
            <div class="row gallery-showcase">

 
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


export default connect(mapStateToProps, mapDispatchToProps)(Embossed);