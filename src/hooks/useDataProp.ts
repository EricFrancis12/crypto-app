import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TCoinsMarketChart, TCoinsMarkets, TGlobal } from '../typings/data-types';
import { TStoreState } from '../typings/reducer-types';
import { TCurrency, TListOrder, TListType, TTimeframe } from '../typings/types';
import { coinsMarketChartPlaceholder } from '../data/coinsMarketChart.placeholder';
import { coinsMarketsPlaceholder } from '../data/coinsMarkets.placeholder';
import { globalPlaceholder } from '../data/global.placeholder';

type TEndpointType = 'coinsMarketChart' | 'coinsMarkets' | 'global';

export default function useDataProp({ initialValue, type, dependencies }: {
    initialValue: TCoinsMarketChart | TCoinsMarkets | TGlobal,
    type: 'coinsMarketChart' | 'coinsMarkets' | 'global',
    dependencies: (TCurrency | TTimeframe | TListType | TListOrder)[]
}) {
    const [dataProp, setDataProp] = useState<typeof initialValue>(initialValue);

    useEffect(() => {
        if (dataProp.pending === true) return;

        if (process.env.REACT_APP_PLACEHOLDER_DATA === 'true') {
            const placeholderDataProp =
                type === 'coinsMarketChart' ? coinsMarketChartPlaceholder
                    : type === 'coinsMarkets' ? coinsMarketsPlaceholder
                        : type === 'global' ? globalPlaceholder
                            : null;
            if (placeholderDataProp) {
                console.log('Using placeholder data because process.env.REACT_APP_PLACEHOLDER_DATA is set to "true"');
                setDataProp({ ...placeholderDataProp, pending: false, error: false });
            }
            return;
        }

        const controller = new AbortController();
        const endpoint = getEndpoint(type);

        setDataProp({ ...dataProp, pending: true, error: false });
        fetch(endpoint, {
            signal: controller.signal
        })
            .then(res => res.json())
            .then(resJson => {
                if (resJson) {
                    setDataProp({ ...resJson, pending: false, error: false });
                } else {
                    setDataProp({ ...dataProp, pending: false, error: true });
                }
            })
            .catch(() => {
                setDataProp({ ...dataProp, pending: false, error: true });
            });

        return () => {
            controller.abort();
            setDataProp({ ...dataProp, pending: false });
        };
    }, dependencies);

    return dataProp;
}

const getEndpoint = (type: TEndpointType) => {
    const currency = useSelector((state: TStoreState) => state.currency);
    const timeframe = useSelector((state: TStoreState) => state.timeframe);
    const listType = useSelector((state: TStoreState) => state.listType);
    const listOrder = useSelector((state: TStoreState) => state.listOrder);

    const days = getDays(timeframe);
    const order = `${listType}_${listOrder}`;
    switch (type) {
        case 'coinsMarketChart':
            return `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=${days}&interval=daily`;
        case 'coinsMarkets':
            return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eth&order=${order}&per_page=100&page=1&sparkline=true&price_change_percentage=1h,24h,7d`;
        case 'global':
            return 'https://api.coingecko.com/api/v3/global';
    }
};

const getDays = (timeframe: TTimeframe) => {
    switch (timeframe.name) {
        case '1d': return '1';
        case '1w': return '7';
        case '1m': return '30';
        case '3m': return '90';
        case '6m': return '180';
        case '1y': return '365';
        default: return '1';
    }
};
