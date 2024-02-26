import React, { useContext } from 'react';
import useDataProp from '../hooks/useDataProp';
import { useSelector } from 'react-redux';
import { TData, TCoinsMarketChart, TCoinsMarkets, TGlobal } from '../typings/data-types';
import { TStoreState } from '../typings/reducer-types';

const initialData: TData = {
    coinsMarketChart: {
        pending: false,
        error: false,
        data: {
            prices: [],
            market_caps: [],
            total_volumes: []
        }
    },
    coinsMarkets: {
        pending: false,
        error: false,
        data: []
    },
    global: {
        pending: false,
        error: false,
        data: {
            data: {
                active_cryptocurrencies: 0,
                upcoming_icos: 0,
                ongoing_icos: 0,
                ended_icos: 0,
                markets: 0,
                total_market_cap: {},
                total_volume: {},
                market_cap_percentage: {},
                market_cap_change_percentage_24h_usd: 0,
                updated_at: 0
            }
        }
    }
};

const DataContext = React.createContext({
    data: initialData,
    fetchingData: false,
    error: false
});

export function useData() {
    const data = useContext(DataContext);
    if (!data) {
        throw new Error('useDataContext must be used within a DataContext provider');
    }
    return data;
}

export function DataProvider({ children }: {
    children: React.ReactNode
}) {
    const currency = useSelector((state: TStoreState) => state.currency);
    const timeframe = useSelector((state: TStoreState) => state.timeframe);
    const listType = useSelector((state: TStoreState) => state.listType);
    const listOrder = useSelector((state: TStoreState) => state.listOrder);

    const coinsMarketChart = useDataProp({
        initialValue: structuredClone(initialData.coinsMarketChart),
        type: 'coinsMarketChart',
        dependencies: [currency, timeframe, listType, listOrder]
    }) as TCoinsMarketChart;
    const coinsMarkets = useDataProp({
        initialValue: structuredClone(initialData.coinsMarkets),
        type: 'coinsMarkets',
        dependencies: [currency, timeframe, listType, listOrder]
    }) as TCoinsMarkets;
    const global = useDataProp({
        initialValue: structuredClone(initialData.global),
        type: 'global',
        dependencies: [currency, timeframe, listType, listOrder]
    }) as TGlobal;

    const value = {
        data: {
            coinsMarketChart,
            coinsMarkets,
            global
        },
        fetchingData: coinsMarketChart.pending === true || coinsMarkets.pending === true || global.pending === true,
        error: coinsMarketChart.error === true || coinsMarkets.error === true || global.error === true
    };

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
}
