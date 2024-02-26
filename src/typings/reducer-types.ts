import { TCryptoCoinName, TCurrency, TPortfolioItem, TTimeframe, TListType, TListOrder } from './types';

export type TStoreState = {
    darkMode: boolean,
    searchQuery: string,
    currency: TCurrency,
    timeframe: TTimeframe,
    listType: TListType,
    listOrder: TListOrder,
    portfolio: TPortfolioItem[]
};

export type TReducerAction = TDarkModeAction | TSearchQueryAction | TCurrencyAction | TTimeframeAction
    | TListTypeAction | TListOrderAction | TPortfolioAction;

export type TDarkModeAction = {
    type: 'DARK_MODE_CHANGED',
    payload: {
        darkMode: boolean
    }
};

export type TSearchQueryAction = {
    type: 'SEARCH_QUERY_CHANGED',
    payload: {
        searchQuery: string
    }
};

export type TCurrencyAction = {
    type: 'CURRENCY_CHANGED',
    payload: {
        currency: TCurrency
    }
};

export type TTimeframeAction = {
    type: 'TIMEFRAME_CHANGED',
    payload: {
        timeframe: TTimeframe
    }
};

export type TListTypeAction = {
    type: 'LIST_TYPE_CHANGED',
    payload: {
        listType: TListType
    }
}

export type TListOrderAction = {
    type: 'LIST_ORDER_CHANGED',
    payload: {
        listOrder: TListOrder
    }
};

export type TPortfolioAction = {
    type: 'ADDED_ITEM_TO_PORTFOLIO',
    payload: {
        portfolioItem: TPortfolioItem
    }
} | {
    type: 'REMOVED_ITEM_FROM_PORTFOLIO',
    payload: {
        cryptoCoinName: TCryptoCoinName
    }
};
