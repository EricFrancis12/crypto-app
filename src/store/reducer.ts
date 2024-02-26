import { TStoreState, TReducerAction } from '../typings/reducer-types';
import { getDatesRangeFromTimeframeName } from '../utils/timeframe-utils';

export const initialState: TStoreState = {
    darkMode: false,
    searchQuery: '',
    currency: 'USD',
    timeframe: {
        name: '1d',
        range: getDatesRangeFromTimeframeName('1d')
    },
    listType: 'market_cap',
    listOrder: 'asc',
    portfolio: []
};

export default function reducer(state: TStoreState = initialState, action: TReducerAction) {
    switch (action.type) {
        case 'DARK_MODE_CHANGED':
            return { ...state, darkMode: action.payload.darkMode };
        case 'SEARCH_QUERY_CHANGED':
            return { ...state, searchQuery: action.payload.searchQuery };
        case 'CURRENCY_CHANGED':
            return { ...state, currency: action.payload.currency };
        case 'TIMEFRAME_CHANGED':
            return { ...state, timeframe: action.payload.timeframe };
        case 'LIST_TYPE_CHANGED':
            return { ...state, listType: action.payload.listType };
        case 'LIST_ORDER_CHANGED':
            return { ...state, listOrder: action.payload.listOrder };
        case 'ADDED_ITEM_TO_PORTFOLIO':
            return { ...state, portfolio: [...state.portfolio, action.payload.portfolioItem] };
        case 'REMOVED_ITEM_FROM_PORTFOLIO':
            return { ...state, portfolio: state.portfolio.filter(portfolioItem => portfolioItem.name !== action.payload.cryptoCoinName) };
        default:
            return state;
    }
}
