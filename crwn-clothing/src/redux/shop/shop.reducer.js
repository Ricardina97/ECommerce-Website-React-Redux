import ShopActionTypes from './shop.types';
import SHOP_DATA from './shop.data';
const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: undefined,
};

// const shopReduce = (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//         case ShopActionTypes.UPDATE_COLLECTIONS:
//             return {
//                 ...state,
//                 collections: action.payload,
//             };
//         default:
//             return state;
//     }
// };
const shopReduce = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true,
            };
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload,
            };
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload,
            };
        default:
            return state;
    }
};

export default shopReduce;
