import React, { Component } from 'react';

class About extends Component {
    render() {
      return (
       <div >
         <div className="section-steps">
            <div className="row">
                <h2>Who are we</h2>
            </div>
         <div className="row">

            <div className="col span-2-of-5 steps-box">

               <img src="resources/Photos/Header/2.jpeg" alt="" className="app-screen"/>

            </div>

            <div className="col span-3-of-5 steps-box">
               
               <div className="works-step clearfix">
                  <h3>Who:</h3>
                  <p>
                  Shri Rangaa is an online business of Tanjore Art Gallery  a leading manufacturer of Tanjore Paintings. It is an initiative to reach the customers directly without any middlemen or agents. After serving our customers for years through our traditional offerings, we now bring the same assurance of quality and service to our Online Channel.
                   </p>
               </div>

               <p>&nbsp;</p>

               <div className="works-step clearfix">
                  <h3>What:</h3>
                  <p>
                  As manufacturers we offer all our products to our customers directly at wholesale prices. Therefore at this Online Store, we assure you value for your money. 
                  </p>
               </div>

               <p>&nbsp;</p>

               <div className="works-step clearfix">
                  <h3>Where:</h3>
                  <p>
                  We can deliver to all over world.
                   </p>
               </div>

               <p>&nbsp;</p>

               <div className="works-step clearfix">
                  <h3>Secure Shopping:</h3>
                  <p>
                  We guarantee you a secure shopping experience on our Online Store. All information entered by you on these pages will be kept strictly in confidence and will not be sold for commercial gains. Our payment partners and shipping partners ensure a safe and comfortable shopping experience for you.There is much to explore here.
                  </p>
               </div>
      
            </div>
         </div>
        </div>
       </div>
      );
    }
  }
  
  export default About;
  