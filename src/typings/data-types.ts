

export type TData = {
    coinsMarketChart: TCoinsMarketChart,
    coinsMarkets: TCoinsMarkets,
    global: TGlobal
};

export type TCoinsMarketChart = {
    pending: boolean,
    error: boolean,
    data: {
        prices: ([number, number])[],
        market_caps: ([number, number])[],
        total_volumes: ([number, number])[]
    }
};

export type TCoinsMarkets = {
    pending: boolean,
    error: boolean,
    data: ({
        id: string,
        symbol: string,
        name: string,
        image: string,
        current_price: number | null,
        market_cap: number | null,
        market_cap_rank: unknown,
        fully_diluted_valuation: number | null,
        total_volume: number | null,
        high_24h: number | null,
        low_24h: number | null,
        price_change_24h: number | null,
        price_change_percentage_24h: number | null,
        market_cap_change_24h: number | null,
        market_cap_change_percentage_24h: number | null,
        circulating_supply: number | null,
        total_supply: number | null,
        max_supply: unknown,
        ath: number | null,
        ath_change_percentage: number | null,
        ath_date: string | Date | null,
        atl: number | null,
        atl_change_percentage: number | null,
        atl_date: string | Date | null,
        roi: unknown,
        last_updated: string | Date | null,
        sparkline_in_7d: {
            price: number[]
        },
        price_change_percentage_1h_in_currency: number | null,
        price_change_percentage_24h_in_currency: number | null,
        price_change_percentage_7d_in_currency: number | null
    })[]
};

export type TGlobal = {
    pending: boolean,
    error: boolean,
    data: {
        data: {
            active_cryptocurrencies: number,
            upcoming_icos: number,
            ongoing_icos: number,
            ended_icos: number,
            markets: number,
            total_market_cap: {
                [key: string]: number
            },
            total_volume: {
                [key: string]: number
            },
            market_cap_percentage: {
                [key: string]: number
            },
            market_cap_change_percentage_24h_usd: number,
            updated_at: number
        }
    }
};
