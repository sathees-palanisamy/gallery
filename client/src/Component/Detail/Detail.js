import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import { withRouter } from 'react-router';
import { GlassMagnifier } from "react-image-magnifiers";

class Detail extends Component {

   constructor(props) {
      super(props);
      this.state = { price: this.priceFormating(this.props.imagePrice), 
                     priceCat: 'A', 
                     frameSize: "13in x 11in x 2in", 
                     nonFormatPrice: this.props.imagePrice,
                     quantity: 1 };


      this.handleBackClick = this.handleBackClick.bind(this);
      this.handleBasketClick = this.handleBasketClick.bind(this);
      this.priceChange = this.priceChange.bind(this);
      this.quantityChange = this.quantityChange.bind(this);
   }

   handleBackClick = (event) => {
      this.props.switchToShopPage();
   }

   handleBasketClick = (imageLink, imageHeading, imagePrice, frameSize,quantity) => {
      this.props.addBasket(imageLink, imageHeading, imagePrice, frameSize,quantity)
   }

   quantityChange(event) {
      this.setState({ quantity: event.target.value });
   }

   priceChange(event) {
      this.setState({ priceCat: event.target.value });
      let newPrice;
      let newFrameSize;
      if (event.target.value === 'A') {
         newPrice = this.props.imagePrice;
         newFrameSize = "13in x 11in x 2in"
      }
      if (event.target.value === 'B') {
         newPrice = this.props.imagePrice * 1.5;
         newFrameSize = "15in x 13in x 2in"
      }
      if (event.target.value === 'C') {
         newPrice = this.props.imagePrice * 2;
         newFrameSize = "18in x 15in x 2in"
      }
      if (event.target.value === 'D') {
         newPrice = this.props.imagePrice * 2.5;
         newFrameSize = "21in x 18in x 2in"
      }
      if (event.target.value === 'E') {
         newPrice = this.props.imagePrice * 2.875;
         newFrameSize = "23in x 19in x 2in "
      }
      if (event.target.value === 'F') {
         newPrice = this.props.imagePrice * 3.75;
         newFrameSize = "28in x 22in x 2in"
      }
      if (event.target.value === 'G') {
         newPrice = this.props.imagePrice * 5.5;
         newFrameSize = "31in x 25in x 2in "
      }
      if (event.target.value === 'H') {
         newPrice = this.props.imagePrice * 7.5;
         newFrameSize = "35in x 29in x 2in"
      }
      this.setState({ frameSize: newFrameSize });
      this.setState({ price: this.priceFormating(newPrice) });
      this.setState({ nonFormatPrice: newPrice });
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
      return (
         <div >
            <div className="section-steps">
               <div className="row">
                  <h2>{this.props.imageHeading}</h2>
               </div>

               <div className="row">

                  <div className="col span-1-of-2 steps-box">
                     <GlassMagnifier
                        imageSrc={this.props.imageLink}
                        imageAlt="image"
                        magnifierSize="60%"
                        square
                     />

                  </div>
                  <div className="col span-1-of-2 steps-box">
                     <div className="price clearfix">
                        <h3>₹ {this.state.price}</h3>
                     </div>

                     <div>
                        <div >
                           <span className="selectLabel">Frame Size</span>
                           <select className="select-css" value={this.state.priceCat} onChange={this.priceChange}>
                              <option value="A">13in x 11in x 2in </option>
                              <option value="B">15in x 13in x 2in </option>
                              <option value="C">18in x 15in x 2in </option>
                              <option value="D">21in x 18in x 2in </option>
                              <option value="E">23in x 19in x 2in </option>
                              <option value="F">28in x 22in x 2in </option>
                              <option value="G">31in x 25in x 2in </option>
                              <option value="H">35in x 29in x 2in </option>
                           </select>
                        </div>
                        <br></br>
                        <div>
                           <span className="selectLabel">Quantity</span>
                           <select className="select-css quantitySize" value={this.state.quantity} onChange={this.quantityChange}>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                           </select>
                        </div>
                     </div>
                     <p>&nbsp;</p>

                     <div className="works-step clearfix">
                        <h3>About:</h3>
                        <p>
                           This Painting is 100% handmade made with original 22 carat gold leaves and authentic Jaipur gems by skilled artisans in Thanjavur. Beautiful gift for any auspicious occasion.
                   </p>
                     </div>

                     <p>&nbsp;</p>

                     <div className="works-step clearfix">
                        <h3>Materials:</h3>
                        <p>
                           22 Carat Original Gold Foils, Water Resistant Plywood, Cloth, paints, authentic Jaipur gem stones, Arabic gum and chalk powder.
                  </p>
                     </div>

                     <p>&nbsp;</p>

                     <div className="works-step clearfix">
                        <h3>Frame:</h3>
                        <p>
                           Traditional Chettinad Teak Wood frame and Unbreakable fiberglass. Color: Multicolor.
                   </p>
                     </div>

                     <br></br>
                     <div className="detail-flex">

                        <div onClick={this.handleBackClick}>
                           <span className="btn btn1-color">Back To Shop</span>
                        </div>

                        <div onClick={(e) => this.handleBasketClick(this.props.imageLink, this.props.imageHeading, this.state.nonFormatPrice, this.state.frameSize,this.state.quantity)}>
                           <span className="btn btn2-color">Add To Basket</span>
                        </div>

                     </div>

                  </div>

               </div>

            </div>
         </div>
      );
   }
}


const mapStateToProps = (state) => {
   return {
      renderUiPage: state.pageTag.uiPage,
      imageLink: state.pageTag.imageLink,
      imageHeading: state.pageTag.imageHeading,
      imagePrice: state.pageTag.imagePrice
   }
}

const mapDispatchToProps = dispatch => {
   return {
      addBasket: (imageLink, imageHeading, imagePrice, frameSize, quantity) => dispatch(actions.addBasket(imageLink, imageHeading, imagePrice, frameSize,quantity)),
      switchToShopPage: () => dispatch({ type: 'SWITCH_TO_SHOP' })
   }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Detail));
