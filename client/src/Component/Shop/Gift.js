import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../store/actions';
import './Shop.css';

class Gift extends Component {

    constructor(props) {
        super(props);
        this.state = {categories: 'Decorative Gift'};
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
                    <li class="side-nav1__item side-nav1__item--active" onClick={this.props.switchToGift}>
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
                            <img src="resources/Photos/Header/3.jpeg" alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹4,000</div>
                        <h3>Annam Tanjore</h3>
                        <div onClick={(e) => this.handleDetailClick("resources/Photos/Header/3.jpeg","Annam Tanjore","4500")}>
                        <span className="btnshop btn-ghost">More Details</span>
                        </div>
                    </div>
                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src="resources/Photos/Header/4.jpeg" alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹4,000</div>
                        <h3>Peacock Tanjore</h3>
                        <div onClick={(e) => this.handleDetailClick("resources/Photos/Header/4.jpeg","Peacock Tanjore","4500")}>
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
                            <img src="resources/Photos/Header/10.jpeg" alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹4,000</div>
                        <h3>Elephant Tanjore</h3>
                        <div onClick={(e) => this.handleDetailClick("resources/Photos/Header/10.jpeg","Elephant Tanjore","4000")}>
                        <span className="btnshop btn-ghost">More Details</span>
                        </div>
                    </div>
                </div>
     
                <div class="row gallery-showcase">
  
 
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
                            <img src="resources/Photos/Header/13.jpeg" alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹4,000</div>
                        <h3>Peacock Tanjore</h3>
                        <div onClick={(e) => this.handleDetailClick("resources/Photos/Header/13.jpeg","Peacock Tanjore","4000")}>
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


export default connect(mapStateToProps, mapDispatchToProps)(Gift);