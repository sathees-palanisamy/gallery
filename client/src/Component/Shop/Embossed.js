import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../store/actions';
import './Shop.css';
import Detail from '../Detail/Detail';
import { withRouter } from 'react-router';

class Embossed extends Component {

    constructor(props) {
        super(props);
        this.state = {categories: 'Goddess',
    
      };
        this.handleDetailClick = this.handleDetailClick.bind(this);
        this.handleCategoryClick = this.handleCategoryClick.bind(this);
    }


    handleDetailClick = (imageLink, imageHeading, imagePrice) => {
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

    priceFormating = (inputPrice) => {

        var x = inputPrice;
        x = x.toString();
        var lastThree = x.substring(x.length - 3);
        var otherNumbers = x.substring(0, x.length - 3);
        if (otherNumbers !== '')
           lastThree = ',' + lastThree;
        var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  
        return res
  
     }  

    render() {
        let renderDisplay;

        renderDisplay = <div class="container">
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
                            <img src={this.props.products[19].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹{this.priceFormating(this.props.products[19].imagePrice)}</div>
                        <h3>{this.props.products[19].imageHeading}</h3>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[19].imageLink,this.props.products[19].imageHeading,this.props.products[19].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[7].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹{this.priceFormating(this.props.products[7].imagePrice)}</div>
                        <h3>{this.props.products[7].imageHeading}</h3>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[7].imageLink,this.props.products[7].imageHeading,this.props.products[7].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[17].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹{this.priceFormating(this.props.products[17].imagePrice)}</div>
                        <h3>{this.props.products[17].imageHeading}</h3>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[17].imageLink,this.props.products[17].imageHeading,this.props.products[17].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[11].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹{this.priceFormating(this.props.products[11].imagePrice)}</div>
                        <h3>{this.props.products[11].imageHeading}</h3>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[11].imageLink,this.props.products[11].imageHeading,this.props.products[11].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>
                </div>

                <div class="row gallery-showcase">
                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[14].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹{this.priceFormating(this.props.products[14].imagePrice)}</div>
                        <h3>{this.props.products[14].imageHeading}</h3>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[14].imageLink,this.props.products[14].imageHeading,this.props.products[14].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[4].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹{this.priceFormating(this.props.products[4].imagePrice)}</div>
                        <h3>{this.props.products[4].imageHeading}</h3>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[4].imageLink,this.props.products[4].imageHeading,this.props.products[4].imagePrice)}>
                        <span >More Details</span>
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
        renderUiShop: state.pageTag.uiShop,
        products: state.dataExt,
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Embossed));