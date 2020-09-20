import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class About extends Component {
    render() {
      let uiRender;
      if (this.props.renderUiPage === '') {
          uiRender =  <div >
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
                   We are skilled artisans with 17 years of experience. We are doing this service all over the India and well known for Tanjore paintings.
                    </p>
                </div>
 
                <p>&nbsp;</p>
 
                <div className="works-step clearfix">
                   <h3>What:</h3>
                   <p>
                   We are selling the paintings with in margin to accommodate the cost of the raw materials and artisans’ wages. We are deliver the paintings with high quality and secure shipping. 
                   </p>
                </div>
 
                <p>&nbsp;</p>
 
                <div className="works-step clearfix">
                   <h3>Where:</h3>
                   <p>
                   We can deliver to all over India.
                    </p>
                </div>
 
                <p>&nbsp;</p>
 
                <div className="works-step clearfix">
                   <h3>Privacy Policy :</h3>
                   <p>
                   We are making sure to follow the privacy policy of India and ensure to protect the customer data.
                   </p>
                </div>
       
             </div>
          </div>
         </div>
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
 
 export default connect(mapStateToProps)(About);

  