import React, { Component } from 'react';
import axios from 'axios';

class Order extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dataList: [],
            amount: 0,
            status: '',
            uploadStatus: '',
            uiStatus: '',
            login1: '',
            password1: '',
        }

        this.amountChange = this.amountChange.bind(this);
        this.statusChange = this.statusChange.bind(this);
        this.DeleteClick = this.DeleteClick.bind(this);
        this.updateList = this.updateList.bind(this);
        this.updateList1 = this.updateList1.bind(this);

        this.loginChange = this.loginChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    amountChange(event) {
        this.setState({ amount: event.target.value });
    }

    loginChange(event) {
        this.setState({ login1: event.target.value });
    }

    passwordChange(event) {
        this.setState({ password1: event.target.value });
    }

    handleSubmit(event) {

        const data = {
            user : this.state.login1,
            password : this.state.password1
        };

        axios.post('http://localhost:5000/login', data)
        .then(response => {



          if (response.data.status === 'success') {

                this.setState({ uiStatus: 'list' });
                this.displaylist();
    
            } else {
                this.setState({ uploadStatus: 'Invalid login details' });
            }
    

        })
        .catch((error) => {
            console.log(error)
        });

 


        event.preventDefault();

    }


    DeleteClick = (orderid, e) => {

        const data = {
            orderid
        };

        axios.post('http://localhost:5000/delete', data)
            .then(response => {
                this.displaylist();
            })
            .catch((error) => {
                this.displaylist();
            });


    }

    updateList = (orderid, amount, paid, pendingamt, e) => {


        let newPaid = amount - 1 + 1 + parseInt(paid);
        let newPendingamt = parseInt(pendingamt) - amount;

        const data = {
            orderid: orderid,
            paid: newPaid,
            pendingamt: newPendingamt
        };


        axios.post('http://localhost:5000/updateamount', data)
            .then(response => {
                this.displaylist();
            })
            .catch((error) => {
                this.displaylist();
            });

    }

    updateList1 = (orderid, status, oldStatus, e) => {

        let NewStatus = '';

        if (status === '') {
            NewStatus = oldStatus;
        } else {
            NewStatus = status
        }

        const data = {
            orderid: orderid,
            status: NewStatus,
        };


        axios.post('http://localhost:5000/updatestatus', data)
            .then(response => {
                this.displaylist();
            })
            .catch((error) => {
                this.displaylist();
            });

    }


    statusChange(event) {
        this.setState({ status: event.target.value });
    }


    displaylist() {

        axios.get('http://localhost:5000/list')
            .then(response => {

                this.setState({ dataList: [...response.data.result] });
            })
            .catch((error) => {
                console.log(error)
            });
    }



    render() {


        let renderList;

        let suggestionListPage;

        if (this.state.uiStatus === '') {

            renderList = <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="row row1 subHeadingContainer">

                    <h3>Login Form</h3>

                </div>

                <br></br>
                <br></br>

                <form onSubmit={this.handleSubmit}>
                    <div className="row row1">
                        <div className="contact-form">


                            <div className="row row1">
                                <div className="col col1 span-1-of-3">
                                    <label>Login ID</label>
                                </div>
                                <div className="col col1 span-2-of-3">
                                    <input type="text" name="login" id="login" placeholder="login Id" required onChange={this.loginChange} value={this.state.login1} />
                                </div>
                            </div>

                            <div className="row row1">
                                <div className="col col1 span-1-of-3">
                                    <label>Password</label>
                                </div>
                                <div className="col col1 span-2-of-3">
                                    <input type="password" name="password" id="password" placeholder="password" onChange={this.passwordChange} required value={this.state.password1} />
                                </div>
                            </div>
                            <div className="row row1">
                                <div className="col col1 span-1-of-3">
                                    <label>&nbsp;</label>
                                </div>
                                <div className="col col1 span-2-of-3">
                                    <input type="submit" value="Login"></input>
                                </div>
                            </div>

                        </div>

                    </div>
                </form>
                <br></br>
                <div className="emailAdd">
                    <p>{this.state.uploadStatus}</p>
                </div>
            </div>

        }

        if (this.state.uiStatus === 'list') {

            suggestionListPage = this.state.dataList.map(indiSuggestion => {

                let listImages;

                if (indiSuggestion.imageHeading1 !== '') {
                    listImages = <ul className="iconDisplay">
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading1}, Quantity: {indiSuggestion.Quantity1}, Size: {indiSuggestion.frameSize1}</li>
                    </ul>;
                }

                if (indiSuggestion.imageHeading2 !== '') {
                    listImages = <ul className="iconDisplay">
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading1}, Quantity: {indiSuggestion.Quantity1}, Size: {indiSuggestion.frameSize1}</li>
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading2}, Quantity: {indiSuggestion.Quantity2}, Size: {indiSuggestion.frameSize2}</li>
                    </ul>;
                }


                if (indiSuggestion.imageHeading3 !== '') {
                    listImages = <ul className="iconDisplay">
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading1}, Quantity: {indiSuggestion.Quantity1}, Size: {indiSuggestion.frameSize1}</li>
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading2}, Quantity: {indiSuggestion.Quantity2}, Size: {indiSuggestion.frameSize2}</li>
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading3}, Quantity: {indiSuggestion.Quantity3}, Size: {indiSuggestion.frameSize3}</li>
                    </ul>;
                }


                if (indiSuggestion.imageHeading4 !== '') {
                    listImages = <ul className="iconDisplay">
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading1}, Quantity: {indiSuggestion.Quantity1}, Size: {indiSuggestion.frameSize1}</li>
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading2}, Quantity: {indiSuggestion.Quantity2}, Size: {indiSuggestion.frameSize2}</li>
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading3}, Quantity: {indiSuggestion.Quantity3}, Size: {indiSuggestion.frameSize3}</li>
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading4}, Quantity: {indiSuggestion.Quantity4}, Size: {indiSuggestion.frameSize4}</li>
                    </ul>;
                }


                if (indiSuggestion.imageHeading5 !== '') {
                    listImages = <ul className="iconDisplay">
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading1}, Quantity: {indiSuggestion.Quantity1}, Size: {indiSuggestion.frameSize1}</li>
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading2}, Quantity: {indiSuggestion.Quantity2}, Size: {indiSuggestion.frameSize2}</li>
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading3}, Quantity: {indiSuggestion.Quantity3}, Size: {indiSuggestion.frameSize3}</li>
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading4}, Quantity: {indiSuggestion.Quantity4}, Size: {indiSuggestion.frameSize4}</li>
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading5}, Quantity: {indiSuggestion.Quantity5}, Size: {indiSuggestion.frameSize5}</li>
                    </ul>;
                }


                if (indiSuggestion.imageHeading6 !== '') {
                    listImages = <ul className="iconDisplay">
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading1}, Quantity: {indiSuggestion.Quantity1}, Size: {indiSuggestion.frameSize1}</li>
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading2}, Quantity: {indiSuggestion.Quantity2}, Size: {indiSuggestion.frameSize2}</li>
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading3}, Quantity: {indiSuggestion.Quantity3}, Size: {indiSuggestion.frameSize3}</li>
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading4}, Quantity: {indiSuggestion.Quantity4}, Size: {indiSuggestion.frameSize4}</li>
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading5}, Quantity: {indiSuggestion.Quantity5}, Size: {indiSuggestion.frameSize5}</li>
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading6}, Quantity: {indiSuggestion.Quantity6}, Size: {indiSuggestion.frameSize6}</li>
                    </ul>;
                }


                if (indiSuggestion.imageHeading7 !== '') {
                    listImages = <ul className="iconDisplay">
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading1}, Quantity: {indiSuggestion.Quantity1}, Size: {indiSuggestion.frameSize1}</li>
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading2}, Quantity: {indiSuggestion.Quantity2}, Size: {indiSuggestion.frameSize2}</li>
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading3}, Quantity: {indiSuggestion.Quantity3}, Size: {indiSuggestion.frameSize3}</li>
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading4}, Quantity: {indiSuggestion.Quantity4}, Size: {indiSuggestion.frameSize4}</li>
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading5}, Quantity: {indiSuggestion.Quantity5}, Size: {indiSuggestion.frameSize5}</li>
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading6}, Quantity: {indiSuggestion.Quantity6}, Size: {indiSuggestion.frameSize6}</li>
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading7}, Quantity: {indiSuggestion.Quantity7}, Size: {indiSuggestion.frameSize7}</li>

                    </ul>;
                }


                if (indiSuggestion.imageHeading8 !== '') {
                    listImages = <ul className="iconDisplay">
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading1}, Quantity: {indiSuggestion.Quantity1}, Size: {indiSuggestion.frameSize1}</li>
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading2}, Quantity: {indiSuggestion.Quantity2}, Size: {indiSuggestion.frameSize2}</li>
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading3}, Quantity: {indiSuggestion.Quantity3}, Size: {indiSuggestion.frameSize3}</li>
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading4}, Quantity: {indiSuggestion.Quantity4}, Size: {indiSuggestion.frameSize4}</li>
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading5}, Quantity: {indiSuggestion.Quantity5}, Size: {indiSuggestion.frameSize5}</li>
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading6}, Quantity: {indiSuggestion.Quantity6}, Size: {indiSuggestion.frameSize6}</li>
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading7}, Quantity: {indiSuggestion.Quantity7}, Size: {indiSuggestion.frameSize7}</li>
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading8}, Quantity: {indiSuggestion.Quantity8}, Size: {indiSuggestion.frameSize8}</li>
                    </ul>;
                }


                if (indiSuggestion.imageHeading9 !== '') {
                    listImages = <ul className="iconDisplay">
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading1}, Quantity: {indiSuggestion.Quantity1}, Size: {indiSuggestion.frameSize1}</li>
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading2}, Quantity: {indiSuggestion.Quantity2}, Size: {indiSuggestion.frameSize2}</li>
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading3}, Quantity: {indiSuggestion.Quantity3}, Size: {indiSuggestion.frameSize3}</li>
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading4}, Quantity: {indiSuggestion.Quantity4}, Size: {indiSuggestion.frameSize4}</li>
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading5}, Quantity: {indiSuggestion.Quantity5}, Size: {indiSuggestion.frameSize5}</li>
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading6}, Quantity: {indiSuggestion.Quantity6}, Size: {indiSuggestion.frameSize6}</li>
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading7}, Quantity: {indiSuggestion.Quantity7}, Size: {indiSuggestion.frameSize7}</li>
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading8}, Quantity: {indiSuggestion.Quantity8}, Size: {indiSuggestion.frameSize8}</li>
                        <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading9}, Quantity: {indiSuggestion.Quantity9}, Size: {indiSuggestion.frameSize9}</li>

                    </ul>;
                }

                return <div className="section-plans" key={indiSuggestion.orderid}>

                    <div className="row row1" >

                        <div className="col col1 col-width-1">





                        </div>
                        <div className="col col1 col-width-2">
                            <div className="plan-box">
                                <div>
                                    <ul className="iconDisplay">
                                        <li><p className="plan-price">Order ID:{indiSuggestion.orderid} Name:{indiSuggestion.name}  </p></li>
                                        <li>
                                            <div onClick={(e) => this.DeleteClick(indiSuggestion.orderid, e)}>
                                                <button className="btn1-color">Delete</button>
                                            </div>
                                        </li>
                                    </ul>

                                    <div className="historyDet">
                                        <ul className="iconDisplay">
                                            <li>Email  : {indiSuggestion.Mail} ,</li>
                                            <li>Mobile :{indiSuggestion.Mobileno} ,</li>
                                            <li>Status :{indiSuggestion.status} ,</li>
                                            <li>Paid   :{indiSuggestion.paid} ,</li>
                                            <li>Total  :{indiSuggestion.totalamt} ,</li>
                                            <li>Unpaid :{indiSuggestion.pendingamt},</li>
                                            <li>Order ID :{indiSuggestion.orderDate},</li>
                                            <li>Customer collection :{indiSuggestion.collection === 'true' ? 'Yes' : 'No'}</li>
                                        </ul>
                                    </div>

                                    {indiSuggestion.collection === 'false' ? <div className="historyDet">
                                        <p>Address:</p>

                                        <ul className="iconDisplay">
                                            <li>{indiSuggestion.Doorno} ,</li>
                                            <li> {indiSuggestion.Addressline1} ,</li>
                                            <li>{indiSuggestion.Addressline2} ,</li>
                                            <li> {indiSuggestion.City} ,</li>
                                            <li> {indiSuggestion.Pincode} ,</li>
                                            <li> {indiSuggestion.State}</li>

                                        </ul>
                                    </div> : null
                                    }
                                    <div className="historyDet">
                                        <ul className="iconDisplay">
                                            <li>Comments: {indiSuggestion.Comments}</li>
                                        </ul>
                                    </div>
                                    <div className="row row1">


                                        <div className="col col1 span-1-of-5">
                                            <label>Amount paid:</label>
                                        </div>
                                        <div className="col col1 span-1-of-5">
                                            <input type="text" name="amount" id="amount" placeholder="amount" required onChange={this.amountChange} value={this.state.amount} />
                                        </div>







                                        <div className="col col1 span-1-of-5" onClick={(e) => this.updateList(indiSuggestion.orderid, this.state.amount, indiSuggestion.paid, indiSuggestion.pendingamt)}>
                                            <button className="btn2-color"> Update</button>
                                        </div>

                                    </div>

                                    <div className="row row1">
                                        <div className="col col1 span-1-of-5">
                                            <label>New Status:</label>
                                        </div>
                                        <div className="col col1 span-1-of-5">
                                            <select value={this.state.status} onChange={this.statusChange}>
                                                <option value="Process">Process</option>
                                                <option value="Delivered">Delivered</option>
                                                <option value="Pending">Pending</option>
                                                <option value="Canceled">Canceled</option>
                                                <option value="Shipped">Shipped</option>
                                            </select>

                                        </div>

                                        <div className="col col1 span-1-of-5" onClick={(e) => this.updateList1(indiSuggestion.orderid, this.state.status, indiSuggestion.status)}>
                                            <button className="btn2-color"> Update</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="historyDet">
                                    {listImages}
                                </div>
                            </div>




                        </div>
                        <div className="col col1 col-width-3">

                        </div>


                    </div>


                </div>
            }

            );




            renderList = <div  >


                {suggestionListPage}
            </div>

        }

        return (
            <div>

                <div className="row row1">

                    <h2>Order List</h2>




                </div>

                {renderList}

            </div>

        );
    };
}


export default Order;