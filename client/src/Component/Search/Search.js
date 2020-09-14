import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../store/actions';
import '../Shop/Shop.css';
import Detail from '../Detail/Detail';
import Shop from '../Shop/Shop';

class Search extends Component {

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


export default connect(mapStateToProps, mapDispatchToProps)(Search);