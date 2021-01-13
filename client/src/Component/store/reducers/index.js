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
    searchText: []
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
                    uiPage: 'search',
                    searchText: [...action.searchText],
                    uiShop: '',
                    subShop: ''
                }
        case 'SWITCH_TO_SHOP':
            return {
                ...state,
                uiPage: 'shop',
                uiShop: 'shop',
            }
        case 'SWITCH_TO_SHOP_FROM_SEARCH':
                return {
                    ...state,
                    
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

const dataReducer = () => {
    return [  {
        imageLink: 'resources/Photos/Header/1.jpeg',
        imageHeading: 'Ganesha Antique Gold',
        imagePrice: '4000',
    },
    {
      imageLink: 'resources/Photos/Header/2.jpeg',
      imageHeading: 'Balaji Blue Tanjore',
      imagePrice: '4000',
    },
    {
      imageLink: 'resources/Photos/Header/3.jpeg',
      imageHeading: 'Annam Tanjore',
      imagePrice: '4000',
    },
    {
      imageLink: 'resources/Photos/Header/4.jpeg',
      imageHeading: 'Peacock Tanjore',
      imagePrice: '4000',
    },
    {
      imageLink: 'resources/Photos/Header/5.jpeg',
      imageHeading: 'Yasodha Krishna',
      imagePrice: '4000',
    },
    {
      imageLink: 'resources/Photos/Header/6.jpeg',
      imageHeading: 'Ganesha Red Curtain',
      imagePrice: '4000',
    },
    {
      imageLink: 'resources/Photos/Header/7.jpeg',
      imageHeading: 'Peacock Tanjore',
      imagePrice: '4000',
    },
    {
      imageLink: 'resources/Photos/Header/8.jpeg',
      imageHeading: 'Saraswathi Tanjore',
      imagePrice: '4000',
    },
    {
      imageLink: 'resources/Photos/Header/9.jpeg',
      imageHeading: 'Balaji Tanjore',
      imagePrice: '4000',
    },
    {
      imageLink: 'resources/Photos/Header/10.jpeg',
      imageHeading: 'Elephant Tanjore',
      imagePrice: '4000',
    },
    {
      imageLink: 'resources/Photos/Header/11.jpeg',
      imageHeading: 'Elephant Tanjore',
      imagePrice: '4000',
    },
    {
      imageLink: 'resources/Photos/Header/12.jpeg',
      imageHeading: 'Gaja Lakshmi',
      imagePrice: '4000',
    },
    {
      imageLink: 'resources/Photos/Header/13.jpeg',
      imageHeading: 'Peacock Tanjore',
      imagePrice: '4000',
    },
    {
      imageLink: 'resources/Photos/Header/14.jpeg',
      imageHeading: 'Raja Alangaram Murugan',
      imagePrice: '4000',
    },
    {
      imageLink: 'resources/Photos/Header/15.jpeg',
      imageHeading: 'Gaja Lakshmi',
      imagePrice: '4000',
    },
    {
      imageLink: 'resources/Photos/Header/16.jpeg',
      imageHeading: 'Vennaithazhi Krishna',
      imagePrice: '4000',
    },
    {
      imageLink: 'resources/Photos/Header/17.jpeg',
      imageHeading: 'Ganesha Red Curtain',
      imagePrice: '4000',
    },
    {
      imageLink: 'resources/Photos/Header/18.jpeg',
      imageHeading: 'Lakshmi Tanjore',
      imagePrice: '4000',
    },
    {
      imageLink: 'resources/Photos/Header/19.jpeg',
      imageHeading: 'Ganesha Tanjore',
      imagePrice: '4000',
    },
    {
      imageLink: 'resources/Photos/Header/20.jpeg',
      imageHeading: 'Saraswathi Tanjore',
      imagePrice: '4000',
    }
]

}

export default combineReducers({
    pageTag: pageReducer,
    dataExt: dataReducer
});