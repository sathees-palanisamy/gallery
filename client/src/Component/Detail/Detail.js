import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
   Magnifier,
   GlassMagnifier,
   SideBySideMagnifier,
   PictureInPictureMagnifier,
   MOUSE_ACTIVATION,
   TOUCH_ACTIVATION
} from "react-image-magnifiers";

class Detail extends Component {

   constructor(props) {
      super(props);
      this.state = {price: this.priceFormating(this.props.imagePrice),priceCat: 'A'};


      this.handleBackClick = this.handleBackClick.bind(this);
      this.priceChange = this.priceChange.bind(this);
   }

   handleBackClick = (event) => {
      console.log('handleBackClick');
      this.props.switchToShopPage();
   }

  priceChange(event) {
   this.setState({ priceCat: event.target.value });
   let newPrice;
   if (event.target.value === 'A') {
      newPrice = this.props.imagePrice;
   }
   if (event.target.value === 'B') {
      newPrice = this.props.imagePrice *1.5;
   }
   if (event.target.value === 'C') {
      newPrice = this.props.imagePrice *2;
   }
   if (event.target.value === 'D') {
      newPrice = this.props.imagePrice *2.5;
   }
   if (event.target.value === 'E') {
      newPrice = this.props.imagePrice *2.875;
   }
   if (event.target.value === 'F') {
      newPrice = this.props.imagePrice *3.75;
   }
   if (event.target.value === 'G') {
      newPrice = this.props.imagePrice *5.5;
   }
   if (event.target.value === 'H') {
      newPrice = this.props.imagePrice *7.5;
   }


   
   this.setState({ price: this.priceFormating(newPrice) });
  }

  priceFormating = (inputPrice) => {

   var x=inputPrice;
   x=x.toString();
    var lastThree = x.substring(x.length-3);
    var otherNumbers = x.substring(0,x.length-3);
    if(otherNumbers !== '')
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
                     <br></br>
                     <div>
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
                     <div className="col" onClick={this.handleBackClick}>
                        <span className="btn btn1-color">Back To Shop</span>
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
      switchToShopPage: () => dispatch({ type: 'SWITCH_TO_SHOP' })   
   }
}


export default connect(mapStateToProps,mapDispatchToProps)(Detail);
