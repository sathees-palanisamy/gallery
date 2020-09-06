import { combineReducers } from 'redux';

// To initialize the store 
const initialState = {
    uiPage: 'Home',
};

// To change the state based on th action reducers 
const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SWITCH_TO_HOME':
            return {
                ...state,
                uiPage: 'home'
            }
        case 'SWITCH_TO_SHOP':
                return {
                    ...state,
                    uiPage: 'shop'
                }
        default:
            return state;
    }
}

export default combineReducers({
    pageTag: pageReducer
});