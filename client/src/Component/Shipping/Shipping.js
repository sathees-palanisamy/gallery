import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Testimonals extends Component {
    render() {
        let uiRender;
        if (this.props.renderUiPage === '') {
            uiRender =  <div className="section-testimonials">
            <br></br>
           <div className="row" >
               <h2>Processing Time & Shipping within India</h2>
           </div>
           <div className="row">
               <div className="col span-1-of-3">
                   <div className="blockquote1">
                   All the Paintings are made to order, the processing time will take 2 to 3 weeks ( Working days ) depending upon the size. TTAGALLERY will ensure that the products are delivered in excellent condition and in the fastest time possible. Most of the items are shipped for free.
                            </div>
               </div>
               <div className="col span-1-of-3">
                   <div className="blockquote1">
                   <p><i>CASH ON DELIVERY:</i></p>You can choose the Cash-on-Delivery (COD) mode of payment and pay for your order only when you actually receive it. COD is provided through our logistic partners in the selected cities only. 
                   </div>
               </div>
               <div className="col span-1-of-3">
                   <div className="blockquote1">
                   <p><i>Shipping Time INDIA:</i></p>
                   <p>Zone A:  Within Chennai - 2 days</p>
                   <p>Zone B:  Within Same state – 3 days</p>
                   <p>Zone C:  Metro to Metro – 3-4 days</p>
                   <p>Zone D:  Rest of India – 4-5 days</p>
                   <p>Zone E:  North east & Jammu – 6-7 days</p>
                   </div>
               </div>
           </div>
           <br></br>
           <div className="row" >
               <h2>International Shipping</h2>
           </div>
           <div className="row">
               <div className="col span-1-of-3">
               <div className="blockquote1">
               <p>The transport costs for your shipments are calculated on the basis of the total weight.
   A decisive factor for calculating the price, however, is whether the dimensional weight exceeds the actual weight.
   </p>
                 /div>
               </div>
           </div>
           <div className="col span-1-of-3">
                   <div className="blockquote1">
                   <p><i>Import Duty:</i></p>We don't have any control over import duty, and we cannot able to tell how much customs officer will charge you. It purely depends on the country and their customs policy. Customers only need to pay the customs Duty for their products if any.
                   </div>
               </div>
   
               <div className="col span-1-of-3">
                   <div className="blockquote1">
                   We do not accept any responsibility and will not be liable for any loss or damage on International shipping. Insurance Claim should be made directly to the UPS/FEDEX/DHL.
                   </div>
               </div>
               </div>
               <br></br>
          </div>

        }

        if (this.props.renderUiPage === 'search') {
            uiRender = <Redirect to="/search" />
            }
  
            
      return (
        uiRender  
      );
    }
  }
  
  const mapStateToProps = (state) => {
    return {
        renderUiPage: state.pageTag.uiPage,
    }
  }
  
  export default connect(mapStateToProps)(Testimonals);

  