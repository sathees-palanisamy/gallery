import { combineReducers } from 'redux';

// To initialize the store 
const initialState = {
    uiPage: '',
    imageLink: '',
    imageHeading: 'Heading',
    imagePrice: '',
    uiShop: '',
    subShop: '',
    order: [],
};

// To change the state based on th action reducers 
const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SWITCH_TO_HOME':
            return {
                ...state,
                uiPage: ''
            }
        case 'SWITCH_TO_SEARCH':
                return {
                    ...state,
                    uiPage: 'search'
                }
        case 'SWITCH_TO_SHOP':
            return {
                ...state,
                uiPage: 'shop',
                uiShop: 'shop',
            }
        case 'SWITCH_TO_EMBOSSED':
                return {
                    ...state,
                    uiPage: 'shop',
                    uiShop: 'shop',
                    subShop: ''
                }
        case 'SWITCH_TO_GIFT':
                return {
                    ...state,
                    uiPage: 'shop',
                    uiShop: 'shop',
                    subShop: 'gift'
                }
        case 'SWITCH_TO_OTHERS':
                return {
                    ...state,
                    uiPage: 'shop',
                    uiShop: 'shop',
                    subShop: 'others'
                }
        case 'ADD_TO_BASKET':
                    return {
                        ...state,
                        order: [...state.order,action.newOrder],
                    }
        case 'UPDATE_BASKET':
                        return {
                            ...state,
                            order: [...action.newOrders],
                        }
        case 'DATA_MAPPING':
            return {
                ...state,
                uiShop: 'detail',
                imageLink: action.imageLink,
                imageHeading: action.imageHeading,
                imagePrice: action.imagePrice
            }
        default:
            return state;
    }
}

export default combineReducers({
    pageTag: pageReducer
});