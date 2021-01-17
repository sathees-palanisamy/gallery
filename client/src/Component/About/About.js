import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import * as actions from '../store/actions';


class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customerName: '',
            emailAddress: ' ',
            message: '',
            mobileNo: '',
            appointment: false,
            updateOrders: [...this.props.renderOrders],
            house: '',
            addline1: '',
            addline2: '',
            postcode: '',
            city: '',
            state: '',
            message: '',
            submitted: false,
            OrderID: '',
        }

        this.nameChange = this.nameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.mobileNoChange = this.mobileNoChange.bind(this);
        this.houseChange = this.houseChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeItem = this.removeItem.bind(this);

        this.addline1Change = this.addline1Change.bind(this);
        this.addline2Change = this.addline2Change.bind(this);
        this.postcodeChange = this.postcodeChange.bind(this);
        this.cityChange = this.cityChange.bind(this);
        this.stateChange = this.stateChange.bind(this);
        this.messageChange = this.messageChange.bind(this);
        this.appointmentChange = this.appointmentChange.bind(this);
    }

    nameChange(event) {
        this.setState({ customerName: event.target.value });
    }

    emailChange(event) {
        this.setState({ emailAddress: event.target.value });
    }

    messageChange(event) {
        this.setState({ message: event.target.value });
    }

    mobileNoChange(event) {
        this.setState({ mobileNo: event.target.value });
    }

    houseChange(event) {
        this.setState({ house: event.target.value });
    }

    addline1Change(event) {
        this.setState({ addline1: event.target.value });
    }

    addline2Change(event) {
        this.setState({ addline2: event.target.value });
    }

    postcodeChange(event) {
        this.setState({ postcode: event.target.value });
    }

    cityChange(event) {
        this.setState({ city: event.target.value });
    }

    stateChange(event) {
        this.setState({ state: event.target.value });
    }

    appointmentChange(event) {
        this.setState(prevState => ({
            appointment: !prevState.appointment
        }));
    }


    handleSubmit(amountTotal) {
  


        var currentdate = new Date(); 

        var OrderID = currentdate.getDate() + ''
        + (currentdate.getMonth()+1) + ''
        + currentdate.getFullYear() + ''
        + currentdate.getHours() + ''
        + currentdate.getMinutes() 

        this.setState({ OrderID: OrderID });

        let imageLink1  = ''
        let imageHeading1  = ''
        let imagePrice1  = ''
        let frameSize1  = ''
        let Quantity1  = ''
        let imageLink2  = ''
        let imageHeading2  = ''
        let imagePrice2  = ''
        let frameSize2  = ''
        let Quantity2  = ''
        let imageLink3  = ''
        let imageHeading3  = ''
        let imagePrice3  = ''
        let frameSize3  = ''
        let Quantity3  = ''
        let imageLink4  = ''
        let imageHeading4  = ''
        let imagePrice4  = ''
        let frameSize4  = ''
        let Quantity4  = ''
        let imageLink5  = ''
        let imageHeading5  = ''
        let imagePrice5  = ''
        let frameSize5  = ''
        let Quantity5  = ''
        let imageLink6  = ''
        let imageHeading6  = ''
        let imagePrice6  = ''
        let frameSize6  = ''
        let Quantity6  = ''
        let imageLink7  = ''
        let imageHeading7  = ''
        let imagePrice7  = ''
        let frameSize7  = ''
        let Quantity7  = ''
        let imageLink8  = ''
        let imageHeading8  = ''
        let imagePrice8  = ''
        let frameSize8  = ''
        let Quantity8  = ''
        let imageLink9  = ''
        let imageHeading9  = ''
        let imagePrice9  = ''
        let frameSize9  = ''
        let Quantity9= ''

        if (this.state.updateOrders.length > 0) {

           imageLink1  =  this.state.updateOrders[0].imageLink;
           imageHeading1  = this.state.updateOrders[0].imageHeading;
           imagePrice1  =    this.state.updateOrders[0].imagePrice;
           frameSize1  =      this.state.updateOrders[0].frameSize;
           Quantity1  =          this.state.updateOrders[0].quantity;
        }

        if (this.state.updateOrders.length > 1) {

            imageLink2  =  this.state.updateOrders[1].imageLink;
             imageHeading2  = this.state.updateOrders[1].imageHeading;
             imagePrice2  =    this.state.updateOrders[1].imagePrice;
             frameSize2  =      this.state.updateOrders[1].frameSize;
             Quantity2  =          this.state.updateOrders[1].quantity;
        }
        if (this.state.updateOrders.length > 2) {

             imageLink3  =  this.state.updateOrders[2].imageLink;
             imageHeading3  = this.state.updateOrders[2].imageHeading;
             imagePrice3  =    this.state.updateOrders[2].imagePrice;
             frameSize3  =      this.state.updateOrders[2].frameSize;
         Quantity3  =          this.state.updateOrders[2].quantity;
        }
        if (this.state.updateOrders.length > 3) {

             imageLink4  =  this.state.updateOrders[3].imageLink;
             imageHeading4  = this.state.updateOrders[3].imageHeading;
             imagePrice4  =    this.state.updateOrders[3].imagePrice;
             frameSize4  =      this.state.updateOrders[3].frameSize;
             Quantity4  =          this.state.updateOrders[3].quantity;
        }
        if (this.state.updateOrders.length > 4) {

             imageLink5  =  this.state.updateOrders[4].imageLink;
             imageHeading5  = this.state.updateOrders[4].imageHeading;
             imagePrice5  =    this.state.updateOrders[4].imagePrice;
             frameSize5  =      this.state.updateOrders[4].frameSize;
             Quantity5  =          this.state.updateOrders[4].quantity;
        }
        if (this.state.updateOrders.length > 5) {

             imageLink6  =  this.state.updateOrders[5].imageLink;
             imageHeading6  = this.state.updateOrders[5].imageHeading;
             imagePrice6  =    this.state.updateOrders[5].imagePrice;
             frameSize6  =      this.state.updateOrders[5].frameSize;
             Quantity6  =          this.state.updateOrders[5].quantity;
        }
        if (this.state.updateOrders.length > 6) {

             imageLink7  =  this.state.updateOrders[6].imageLink;
             imageHeading7  = this.state.updateOrders[6].imageHeading;
             imagePrice7  =    this.state.updateOrders[6].imagePrice;
             frameSize7  =      this.state.updateOrders[6].frameSize;
             Quantity7  =          this.state.updateOrders[6].quantity;
        }
        if (this.state.updateOrders.length > 7) {

             imageLink8 =  this.state.updateOrders[7].imageLink;
             imageHeading8  = this.state.updateOrders[7].imageHeading;
             imagePrice8  =    this.state.updateOrders[7].imagePrice;
         frameSize8  =      this.state.updateOrders[7].frameSize;
             Quantity8  =          this.state.updateOrders[7].quantity;
        }
        if (this.state.updateOrders.length > 8) {

             imageLink9  =  this.state.updateOrders[8].imageLink;
             imageHeading9  = this.state.updateOrders[8].imageHeading;
             imagePrice9  =    this.state.updateOrders[8].imagePrice;
             frameSize9  =      this.state.updateOrders[8].frameSize;
             Quantity9  =          this.state.updateOrders[8].quantity;
        }
        
        if (this.state.updateOrders.length > 0) {
            this.setState({ submitted: true });
            this.props.requestFetchDecisions(OrderID, this.state.customerName, this.state.emailAddress, 
                this.state.mobileNo,
                this.state.house ,
                this.state.addline1 ,
                this.state.addline2 ,
                this.state.postcode ,
                this.state.city ,
                this.state.state ,
                this.state.message ,
                "progress" ,
                "0"  ,
                amountTotal  ,
                amountTotal  ,
                imageLink1  ,
                imageHeading1  ,
                imagePrice1  ,
                frameSize1  ,
                Quantity1  ,    
             imageLink2  ,
             imageHeading2  ,
             imagePrice2  ,
             frameSize2  ,
             Quantity2  ,
             imageLink3  ,
             imageHeading3  ,
             imagePrice3  ,
             frameSize3  ,
             Quantity3  ,
             imageLink4  ,
             imageHeading4  ,
             imagePrice4  ,
             frameSize4  ,
             Quantity4  ,
             imageLink5  ,
             imageHeading5  ,
             imagePrice5  ,
             frameSize5  ,
             Quantity5  ,
             imageLink6  ,
             imageHeading6  ,
             imagePrice6  ,
             frameSize6  ,
             Quantity6  ,
             imageLink7  ,
             imageHeading7  ,
             imagePrice7  ,
             frameSize7  ,
             Quantity7  ,
             imageLink8  ,
             imageHeading8  ,
             imagePrice8  ,
             frameSize8  ,
             Quantity8  ,
             imageLink9  ,
             imageHeading9  ,
             imagePrice9  ,
             frameSize9  ,
             Quantity9,
             this.state.appointment
                );
        } else {
            alert("Basket is empty")
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

    removeItem(index) {
        console.log('indiOrderIndex:', index);

        let newArray = [];
        for (let i = 0; i < this.state.updateOrders.length; i++) {
            if (i !== index) {
                newArray.push(this.state.updateOrders[i])
            }
        }

        this.setState({ updateOrders: [...newArray] });
        this.props.updateBasket(newArray)

    }
    

    render() {

        let orderRender;
        let orderHeader;
        let orderTrailer;

        let amountTotal = 0;

        var currentdate = new Date(); 
        var OrderID = currentdate.getDate() + ''
                + (currentdate.getMonth()+1) + ''
                + currentdate.getFullYear() + ''
                + currentdate.getHours() + ''
                + currentdate.getMinutes() 

        
        if (this.state.updateOrders.length > 0) {

            if (this.state.submitted) {
            orderRender = this.state.updateOrders.map((indiOrder, index) => (<div>
                <div className="detail-flex">
                    <div className="order-photo"> <img src={indiOrder.imageLink} /> </div>
                    <div className="col-fex">
                        <span>{indiOrder.imageHeading}</span>
                        <span>{indiOrder.frameSize}</span>
                        <span>Quantity:{indiOrder.quantity}</span>
                    </div>
                    <div className="col-fex price-color">₹ {this.priceFormating(indiOrder.imagePrice * indiOrder.quantity)}</div>
                </div>
                <br></br>
            </div>
            )) } else {

                orderRender = this.state.updateOrders.map((indiOrder, index) => (<div>
                    <div className="detail-flex">
                        <div className="order-photo"> <img src={indiOrder.imageLink} /> </div>
                        <div className="col-fex">
                            <span>{indiOrder.imageHeading}</span>
                            <span>{indiOrder.frameSize}</span>
                            <span>Quantity:{indiOrder.quantity}</span>
                            <button onClick={e => this.removeItem(index)}>Remove</button>
                        </div>
                        <div className="col-fex price-color">₹ {this.priceFormating(indiOrder.imagePrice * indiOrder.quantity)}</div>
                    </div>
                    <br></br>
                </div>
                ))

            }


            for (let i = 0; i < this.state.updateOrders.length; i++) {
                amountTotal = amountTotal + parseInt(this.state.updateOrders[i].imagePrice, 10) * parseInt(this.state.updateOrders[i].quantity, 10)
            }


            orderHeader = <div className="detail-flex">
                <h3>Product</h3>
                <h3>Name & Size</h3>
                <h3>Price</h3>
            </div>

            orderTrailer = <div className="detail-flex">
                <h3>&nbsp;</h3>
                <h3>Total Amount</h3>
                <h3 className="col-fex price-color">₹ {this.priceFormating(amountTotal)}</h3>
            </div>

        } else {
            orderRender = <div className="row">
                <div className="header-flex" >Empty Basket</div>
            </div>
        }
        let uiRender;
        let formDet;

        if (!this.state.appointment) {

            if (this.state.submitted) {

                formDet = <div>

                    <div className="row">
                        <h2>Order Summary</h2>
                        <br></br>
                    </div>

                    <div className="row">
                        <h3>order ID: {this.state.OrderID}</h3>
                        <br></br>
                    </div>

                    <div className="row">
                        <div className="col span-1-of-2 box">
                        <h3>Shipping Address</h3>
                            <span className="contact-detail">
                          
                                <p>{this.state.customerName}</p>
                                <p>{this.state.emailAddress}</p>
                                <p>{this.state.mobileNo}</p>
                                <p>{this.state.house},{this.state.addline1} {this.state.addline2}</p>
                                <p>{this.state.postcode}</p>
                                <p>{this.state.city}</p>
                                <p>{this.state.state}</p>
                                <p>{this.state.message}</p>
                            </span>
                        </div>
                        <div className="col span-1-of-2">
                            <h3>Contact us</h3>
                            <span className="contact-detail">
                                <a href="https://wa.me/919003474248" className="whatsupplink">WhatsApp Chat</a>
                            </span>
                            <span className="contact-detail">
                                <i className="ion-md-call icon-small contact-detail2"></i>
                                <span>&nbsp;&nbsp;&nbsp;+91 9003474248</span>
                            </span>

                        </div>
                    </div>

                    <br></br>

                    <div className="row">

                        <div className="col span-1-of-3">
                            <div >
                                <p><h3><u>Initial payment:</u></h3></p>Could you please you pay  ₹ <span className="price-color">{this.priceFormating(amountTotal/2)}</span> of the actual painting cost in below bank Details.
                            <div>
                                    <p>Account Name: Shri Rangaa</p>
                                    <p>IFSC Code   : IFSC0001 </p>
                                    <p>Account No  : 463846346364638 </p>
                                    <p>Bank Name   : Chennai </p>
                                    </div>
                                    <br></br>
                     
                            </div>
                        </div>
                        <div className="col span-1-of-3">
                        <p><h3><u>Processing Time:</u></h3></p>Please contact us to get exact processing time and tentative shipping time.
                        <br></br>
                        </div>

                        <div className="col span-1-of-3">
                            <div >
                                <p><h3><u>Shipping Time:</u></h3></p>
                                <p>Within Chennai => 2 days</p>
                                <p>Within Chennai => 2 days</p>
                                <p>Within Tamil Nadu => 3 days</p>
                                <p>Cities => 3 to 4 days</p>
                                <p>Rest of India => 4 to 5 days</p>
                                <p>North east & Jammu => 6 to 7 days</p>
                            </div>
                        </div>
                    </div>


                </div>

            } else {

                formDet = <div>

                    <div className="row">
                        <h2>Shipping/Pickup</h2>
                        <br></br>
                    </div>

                    <div className="row">
                        <div className="contact-form">
                            <div className="col span-1-of-3">
                                <label>Pickup on your Own?</label>
                            </div>
                            <div className="col span-2-of-3">
                                <input type="checkbox" name="news" id="news" checked={this.state.appointment} onChange={this.appointmentChange} /> Yes
                      </div>
                        </div>
                    </div>


                    <form onSubmit={(e) => this.handleSubmit(amountTotal)}>

                        <div className="row">
                            <div className="contact-form">
                                <div className="row">
                                    <div className="col span-1-of-3">
                                        <label>Name</label>
                                    </div>
                                    <div className="col span-2-of-3">
                                        <input type="text" name="name" id="name" placeholder="Your name" required onChange={this.nameChange} value={this.state.customerName} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col span-1-of-3">
                                        <label>Mobile Number</label>
                                    </div>
                                    <div className="col span-2-of-3">
                                        <input type="text" name="mobileNo" id="mobileNo" placeholder="Mobile number" required onChange={this.mobileNoChange} value={this.state.mobileNo} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col span-1-of-3">
                                        <label>Email</label>
                                    </div>
                                    <div className="col span-2-of-3">
                                        <input type="email" name="email" id="email" placeholder="Your email" required onChange={this.emailChange} value={this.state.emailAddress} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col span-1-of-3">
                                        <label>House No</label>
                                    </div>
                                    <div className="col span-2-of-3">
                                        <input type="text" name="house" id="house" placeholder="House Number etc..." required onChange={this.houseChange} value={this.state.house} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col span-1-of-3">
                                        <label>Address line 1</label>
                                    </div>
                                    <div className="col span-2-of-3">
                                        <input type="text" name="addline1" id="addline1" placeholder="Address line 1" required onChange={this.addline1Change} value={this.state.addline1} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col span-1-of-3">
                                        <label>Address line 2</label>
                                    </div>
                                    <div className="col span-2-of-3">
                                        <input type="text" name="addline2" id="addline2" placeholder="Address line 2" onChange={this.addline2Change} value={this.state.addline2} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col span-1-of-3">
                                        <label>Postal Code</label>
                                    </div>
                                    <div className="col span-2-of-3">
                                        <input type="text" name="postcode" id="postcode" placeholder="Postal code" required onChange={this.postcodeChange} value={this.state.postcode} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col span-1-of-3">
                                        <label>City</label>
                                    </div>
                                    <div className="col span-2-of-3">
                                        <input type="text" name="city" id="city" placeholder="City" required onChange={this.cityChange} value={this.state.city} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col span-1-of-3">
                                        <label>State</label>
                                    </div>
                                    <div className="col span-2-of-3">
                                        <input type="text" name="state" id="state" placeholder="state" required onChange={this.stateChange} value={this.state.state} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col span-1-of-3">
                                        <label>Custom requirement?</label>
                                    </div>
                                    <div className="col span-2-of-3">
                                        <textarea className="message" placeholder="Your message" onChange={this.messageChange}  value={this.state.message} ></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col span-1-of-3">
                                        <label>&nbsp;</label>
                                    </div>
                                    <div className="col span-2-of-3">
                                        <input type="submit" value="Submit Order"></input>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            }
        } else {


            if (this.state.submitted) {

                formDet = <div>

                    <div className="row">
                        <h2>Order Summary</h2>
                        <br></br>
                    </div>

                    <div className="row">
                        <h3>order ID: {this.state.OrderID}</h3>
                        <br></br>
                    </div>

                    <div className="row">
                        <div className="col span-1-of-2 box">
                        <h3>Collection Address</h3>
                            <span className="contact-detail">
                                <p>No.183</p>
                                <p>Karandipalayam,Kattuvalasu</p>
                                <p>Erode District</p>
                                <p>TamilNadu, India - 638056</p>
                            </span>
                            <br></br>
                        </div>
                        <div className="col span-1-of-2">
                            <h3>Contact us</h3>
                            <span className="contact-detail">
                                <a href="https://wa.me/919003474248" className="whatsupplink">WhatsApp Chat</a>
                            </span>
                            <span className="contact-detail">
                                <i className="ion-md-call icon-small contact-detail2"></i>
                                <span>&nbsp;&nbsp;&nbsp;+91 9003474248</span>
                            </span>
                        <br></br>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col span-1-of-2 box">
                        <h3>Customer Details</h3>
                            <span className="contact-detail">
                
                                <p>{this.state.customerName}</p>
                                <p>{this.state.emailAddress}</p>
                                <p>{this.state.mobileNo}</p>
                                <p>{this.state.message}</p>
                            </span>
                        </div>
                        <br></br>
                    </div>
<br></br>
                    <div className="row">

<div className="col span-1-of-2">
    <div >
        <p><u><h3>Initial payment:</h3></u></p>Could you please you pay ₹ <span className="price-color">{this.priceFormating(amountTotal/2)}</span>  of the actual painting cost in below bank Details.
    <div>
            <p>Account Name: Shri Rangaa</p>
            <p>IFSC Code   : IFSC0001 </p>
            <p>Account No  : 463846346364638 </p>
            <p>Bank Name   : Chennai </p>
            </div>
            <br></br>

    </div>
</div>
<div className="col span-1-of-2">
<p><u><h3>Processing Time:</h3></u></p>Please contact us to get exact processing time and collection time.
<br></br>
</div>

</div>

                </div>

            } else {

                formDet = <div>

                    <div className="row">
                        <h2>Shipping/Pickup</h2>
                        <br></br>
                    </div>

                    <form onSubmit={(e) => this.handleSubmit(amountTotal)}>

                        <div className="row">
                            <div className="contact-form">
                                <div className="col span-1-of-3">
                                    <label>Pickup on your Own?</label>
                                </div>
                                <div className="col span-2-of-3">
                                    <input type="checkbox" name="news" id="news" checked={this.state.appointment} onChange={this.appointmentChange} /> Yes
                      </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="contact-form">
                                <div className="row">
                                    <div className="col span-1-of-3">
                                        <label>Name</label>
                                    </div>
                                    <div className="col span-2-of-3">
                                        <input type="text" name="name" id="name" placeholder="Your name" required onChange={this.nameChange} value={this.state.customerName} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col span-1-of-3">
                                        <label>Mobile Number</label>
                                    </div>
                                    <div className="col span-2-of-3">
                                        <input type="text" name="mobileNo" id="mobileNo" placeholder="Mobile number" required onChange={this.mobileNoChange} value={this.state.mobileNo} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col span-1-of-3">
                                        <label>Email</label>
                                    </div>
                                    <div className="col span-2-of-3">
                                        <input type="email" name="email" id="email" placeholder="Your email" required onChange={this.emailChange} value={this.state.emailAddress} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col span-1-of-3">
                                        <label>Custom requirement?</label>
                                    </div>
                                    <div className="col span-2-of-3">
                                        <textarea className="message" placeholder="Your message" onChange={this.messageChange} value={this.state.message} ></textarea>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col span-1-of-3">
                                        <label>&nbsp;</label>
                                    </div>
                                    <div className="col span-2-of-3">
                                        <input type="submit" value="Submit Order"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            }

        }

        if (this.props.renderUiPage !== 'search') {
            uiRender = <div >
                <div className="row">
                    <h2>Order Details</h2>
                    <br></br>
                    {orderHeader}
                    <br></br>
                    {orderRender}
                    <br></br>
                    {orderTrailer}
                </div>
                <br></br>
                <br></br>


                {formDet}


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
        renderOrders: state.pageTag.order
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateBasket: (newOrders) => dispatch(actions.updateBasket(newOrders)),
        requestFetchDecisions: (orderid, name, Mail, 
            Mobileno,
            Doorno ,
            Addressline1 ,
            Addressline2 ,
            Pincode ,
            City ,
            State ,
            Comments ,
            status ,
            paid  ,
            totalamt  ,
            pendingamt  ,
            imageLink1  ,
            imageHeading1  ,
            imagePrice1  ,
            frameSize1  ,
            Quantity1  ,
            imageLink2  ,
            imageHeading2  ,
            imagePrice2  ,
            frameSize2  ,
            Quantity2  ,
            imageLink3  ,
            imageHeading3  ,
            imagePrice3  ,
            frameSize3  ,
            Quantity3  ,
            imageLink4  ,
            imageHeading4  ,
            imagePrice4  ,
            frameSize4  ,
            Quantity4  ,
            imageLink5  ,
            imageHeading5  ,
            imagePrice5  ,
            frameSize5  ,
            Quantity5  ,
            imageLink6  ,
            imageHeading6  ,
            imagePrice6  ,
            frameSize6  ,
            Quantity6  ,
            imageLink7  ,
            imageHeading7  ,
            imagePrice7  ,
            frameSize7  ,
            Quantity7  ,
            imageLink8  ,
            imageHeading8  ,
            imagePrice8  ,
            frameSize8  ,
            Quantity8  ,
            imageLink9  ,
            imageHeading9  ,
            imagePrice9  ,
            frameSize9  ,
            Quantity9,
            collection
            ) => dispatch(actions.fetchDecisions(orderid, name, Mail, 
                Mobileno,
                Doorno ,
                Addressline1 ,
                Addressline2 ,
                Pincode ,
                City ,
                State ,
                Comments ,
                status ,
                paid  ,
                totalamt  ,
                pendingamt  ,
                imageLink1  ,
                imageHeading1  ,
                imagePrice1  ,
                frameSize1  ,
                Quantity1  ,
                imageLink2  ,
                imageHeading2  ,
                imagePrice2  ,
                frameSize2  ,
                Quantity2  ,
                imageLink3  ,
                imageHeading3  ,
                imagePrice3  ,
                frameSize3  ,
                Quantity3  ,
                imageLink4  ,
                imageHeading4  ,
                imagePrice4  ,
                frameSize4  ,
                Quantity4  ,
                imageLink5  ,
                imageHeading5  ,
                imagePrice5  ,
                frameSize5  ,
                Quantity5  ,
                imageLink6  ,
                imageHeading6  ,
                imagePrice6  ,
                frameSize6  ,
                Quantity6  ,
                imageLink7  ,
                imageHeading7  ,
                imagePrice7  ,
                frameSize7  ,
                Quantity7  ,
                imageLink8  ,
                imageHeading8  ,
                imagePrice8  ,
                frameSize8  ,
                Quantity8  ,
                imageLink9  ,
                imageHeading9  ,
                imagePrice9  ,
                frameSize9  ,
                Quantity9,
                collection
                )),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(About));
