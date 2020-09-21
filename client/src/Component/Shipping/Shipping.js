import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Testimonals extends Component {
    render() {
        let uiRender;
        if (this.props.renderUiPage === '') {
            uiRender = <div className="section-testimonials">
                <br></br>
                <div className="row" >
                    <h2>Processing Time</h2>
                </div>
                <div className="row">
                    <div className="col span-1-of-2">
                        <div className="blockquote1">
                        <p><i><u>Onboarding:</u></i></p>We are processing the paintings in less time compared to other competitors whereas processing time is based on size and design. We will provide you processing time once you are onboarded and we will make sure to deliver on or before the align date.
                            </div>
                    </div>
                    <div className="col span-1-of-2">
                        <div className="blockquote1">
                            <p><i><u>Initial payment:</u></i></p>Once you are onboarded, we will request you to pay 50% amount of the actual painting cost. Please transfer the money to below bank Details.
                            <ul>
                                <li>Account Name: Shri Rangaa</li>
                                <li>IFSC Code   : IFSC0001 </li>
                                <li>Account No  : 463846346364638 </li>
                                <li>Bank Name   : Chennai </li>
                            </ul>
                   </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className="row" >
                    <h2>Shipping - India only</h2>
                </div>
                <div className="row">
                    <div className="col span-1-of-2">
                        <div className="blockquote1">
                            <p><i><u>Shipping Time:</u></i></p>
                            <p>Within Chennai => 2 days</p>
                            <p>Within Tamil Nadu => 3 days</p>
                            <p>Cities => 3 to 4 days</p>
                            <p>Rest of India => 4 to 5 days</p>     
                            <p>North east & Jammu => 6 to 7 days</p>
                        </div>
                    </div>

                    <div className="col span-1-of-2">
                        <div className="blockquote1">
                            <p><i><u>Shipment Support:</u></i></p>We will provide you the contact details of delivery partner and delivery note once shipment is made. Shipment is 100% insured and fragile noted delivery, so you no need to worry about the product. Please contact us in case of any issues.
                   </div>
                    </div>
                </div>
                <br></br>
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

