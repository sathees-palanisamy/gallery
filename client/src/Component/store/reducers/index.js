import { combineReducers } from 'redux';

// To initialize the store 
const initialState = {
};

// To change the state based on th action reducers 
const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default combineReducers({
    pageTag: pageReducer
});