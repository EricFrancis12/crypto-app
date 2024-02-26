

export type TCryptoCoin = {
    name: TCryptoCoinName,
    // ...
};
export type TCryptoCoinName = 'Bitcoin' | 'Etherium' /* ... */;

export type TCurrency = 'USD' | 'GBP' | 'EUR' | 'BTC' | 'ETH';

export type TTimeframe = {
    name?: '1d' | '1w' | '1m' | '3m' | '6m' | '1y' | null,
    range: TTimestampRange
};
export type TTimeframeName = '1d' | '1w' | '1m' | '3m' | '6m' | '1y' | null;
export type TTimestampRange = [number, number];

export type TPortfolioItem = {
    name: TCryptoCoinName,
    amount: number,
    datePurchased: Date
};

export type TListType = 'volume' | 'market_cap';
export type TListOrder = 'asc' | 'desc';
