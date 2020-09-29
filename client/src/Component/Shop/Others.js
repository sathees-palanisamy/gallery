import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../store/actions';
import './Shop.css';
import { withRouter } from 'react-router';


class Others extends Component {

    constructor(props) {
        super(props);
        this.state = {categories: 'Others',
        };
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

       console.log('this.props.products[0]',this.props.products[0]);

       console.log('this.props.products[0].imageLink',this.props.products[0].imageLink);

       console.log('this.props.products[0].imagePrice',this.props.products[0].imagePrice);
        
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
                            <img src={this.props.products[0].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹{this.priceFormating(this.props.products[0].imagePrice)}</div>
                        <h3>{this.props.products[0].imageHeading}</h3>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[0].imageLink,this.props.products[0].imageHeading,this.props.products[0].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[1].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹{this.priceFormating(this.props.products[1].imagePrice)}</div>
                        <h3>{this.props.products[1].imageHeading}</h3>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[1].imageLink,this.props.products[1].imageHeading,this.props.products[1].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[2].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹{this.priceFormating(this.props.products[2].imagePrice)}</div>
                        <h3>{this.props.products[2].imageHeading}</h3>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[2].imageLink,this.props.products[2].imageHeading,this.props.products[2].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[3].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹{this.priceFormating(this.props.products[3].imagePrice)}</div>
                        <h3>{this.props.products[3].imageHeading}</h3>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[3].imageLink,this.props.products[3].imageHeading,this.props.products[3].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>


         
                </div>
                 
                <div class="row gallery-showcase">
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

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[5].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹{this.priceFormating(this.props.products[5].imagePrice)}</div>
                        <h3>{this.props.products[5].imageHeading}</h3>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[5].imageLink,this.props.products[5].imageHeading,this.props.products[5].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[6].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹{this.priceFormating(this.props.products[6].imagePrice)}</div>
                        <h3>{this.props.products[6].imageHeading}</h3>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[6].imageLink,this.props.products[6].imageHeading,this.props.products[6].imagePrice)}>
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


         
                </div>
 
                <div class="row gallery-showcase">
                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[8].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹{this.priceFormating(this.props.products[8].imagePrice)}</div>
                        <h3>{this.props.products[8].imageHeading}</h3>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[8].imageLink,this.props.products[8].imageHeading,this.props.products[8].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[9].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹{this.priceFormating(this.props.products[9].imagePrice)}</div>
                        <h3>{this.props.products[9].imageHeading}</h3>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[9].imageLink,this.props.products[9].imageHeading,this.props.products[9].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[10].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹{this.priceFormating(this.props.products[10].imagePrice)}</div>
                        <h3>{this.props.products[10].imageHeading}</h3>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[10].imageLink,this.props.products[10].imageHeading,this.props.products[10].imagePrice)}>
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
                            <img src={this.props.products[12].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹{this.priceFormating(this.props.products[12].imagePrice)}</div>
                        <h3>{this.props.products[12].imageHeading}</h3>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[12].imageLink,this.props.products[12].imageHeading,this.props.products[12].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[13].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹{this.priceFormating(this.props.products[13].imagePrice)}</div>
                        <h3>{this.props.products[13].imageHeading}</h3>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[13].imageLink,this.props.products[13].imageHeading,this.props.products[13].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

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
                            <img src={this.props.products[15].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹{this.priceFormating(this.props.products[15].imagePrice)}</div>
                        <h3>{this.props.products[15].imageHeading}</h3>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[15].imageLink,this.props.products[15].imageHeading,this.props.products[15].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>


         
                </div>

                <div class="row gallery-showcase">
                    <div className="col span-1-of-4 GalleryBoxSize">
                        <figure className="gallery-photo">
                            <img src={this.props.products[16].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹{this.priceFormating(this.props.products[16].imagePrice)}</div>
                        <h3>{this.props.products[16].imageHeading}</h3>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[16].imageLink,this.props.products[16].imageHeading,this.props.products[16].imagePrice)}>
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
                            <img src={this.props.products[18].imageLink} alt="Fashion"   />
                        </figure>
                        <div className="btn-full">From ₹{this.priceFormating(this.props.products[18].imagePrice)}</div>
                        <h3>{this.props.products[18].imageHeading}</h3>
                        <div className="btnshop btn-ghost" onClick={(e) => this.handleDetailClick(this.props.products[18].imageLink,this.props.products[18].imageHeading,this.props.products[18].imagePrice)}>
                        <span >More Details</span>
                        </div>
                    </div>

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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Others));