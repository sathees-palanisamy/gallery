import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../store/actions';
import '../Shop/Shop.css';
import Detail from '../Detail/Detail';
import Shop from '../Shop/Shop';
import { withRouter } from 'react-router';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {categories: ''};
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
        
        if ((this.props.renderUiShop === 'search') || (this.props.renderUiShop === '')) {
            renderDisplay =         <div class="content">
            <nav class="sidebar">
                <ul class="side-nav1">
                    <li class="side-nav1__item" onClick={this.props.switchToEmbossed}>
                        <a href="/shop" class="side-nav1__link">
                            <span className="side-nav1-font-size">3D EMBOSSED</span>
                        </a>
                    </li>
                    <li class="side-nav1__item" onClick={this.props.switchToGift}>
                        <a href="/shop" class="side-nav1__link">
                            <span className="side-nav1-font-size">DECORATIVE GIFT</span>
                        </a>
                    </li>
                    <li class="side-nav1__item" onClick={this.props.switchToOthers}>
                        <a href="/shop" class="side-nav1__link">
                            <span className="side-nav1-font-size">OTHERS</span>
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
                        <option value="">Select</option>
                        <option value="Goddess">Goddess</option>
                        <option value="Decorative Gift">Decorative Gift</option>
                        <option value="Others">Others</option>
                    </select>
            </div>

            <main class="hotel-view">
                <div class="row gallery-showcase">
                 <br></br>
                 <br></br>
               <h3>No Data ....!</h3>
               </div>
            </main>
            </div>

        }

        
        if (this.props.renderUiShop === 'detail') {
            renderDisplay = <Detail />
        }

        if (this.props.renderUiShop === 'shop') {
            renderDisplay = <Shop />
        }

        return (
            renderDisplay
         );
    }
}

const mapStateToProps = (state) => {
    return {
        renderUiPage: state.pageTag.uiPage,
        renderUiShop: state.pageTag.uiShop,
        renderSubShop: state.pageTag.subShop
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));