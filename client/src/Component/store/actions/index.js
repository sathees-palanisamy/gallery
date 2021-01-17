
import axios from 'axios';

export const updateData = (imageLink, imageHeading, imagePrice) => {

    return {
        type: 'DATA_MAPPING',
        imageLink: imageLink,
        imageHeading: imageHeading,
        imagePrice: imagePrice
    }

}

export const addBasket = (imageLink, imageHeading, imagePrice,frameSize,quantity) => {

    return {
        type: 'ADD_TO_BASKET',
        newOrder: {"imageLink" : imageLink,
        "imageHeading": imageHeading,
        "imagePrice": imagePrice,
        "frameSize": frameSize,
        "quantity": quantity
    }
    }

}

export const updateBasket = (newOrders) => {

    return {
        type: 'UPDATE_BASKET',
        newOrders: newOrders,
    }

}

export const updateSearch = (searchText) => {

    return {
        type: 'SWITCH_TO_SEARCH',
        searchText: [...searchText],
    }

}

// To map the fetch response with details
export const fetchResponseSuccess = (res) => {
    return {
        type: 'API_RESPONSE_MAPPING',
        errno: res.data.errno
    }
}

export const fetchResponseError = (res) => {
    return {
        type: 'API_RESPONSE_ERROR'
    }
}


// Action creator - To fetch the decision creator

export const fetchDecisions = (orderid, 
    name ,
    Mail ,
    Mobileno ,
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
    ) => async dispatch => {
    let currentTimestamp = new Date();
    await axios({
        method: 'post',
        url: 'http://localhost:5000/create',
        data: {
            orderid,
            name ,
            Mail ,
            Mobileno ,
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
        }
    })
        .then(function (response) {
            if (response.status === 200) {
                dispatch(fetchResponseSuccess(response));
            }
            else {
                dispatch(fetchResponseError());
            }
        })
        .catch(function (error) {
            dispatch(fetchResponseError());
        });
}