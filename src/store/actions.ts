import { store } from './store';
import { TCurrency } from '../typings/types';

export function searchQueryChanged(newSearchQuery: string) {
    store.dispatch({ type: 'SEARCH_QUERY_CHANGED', payload: { searchQuery: newSearchQuery } });
}

export function currencyChanged(newCurrency: TCurrency) {
    store.dispatch({ type: 'CURRENCY_CHANGED', payload: { currency: newCurrency } });
}

export function darkModeChanged(newDarkMode: boolean) {
    store.dispatch({ type: 'DARK_MODE_CHANGED', payload: { darkMode: newDarkMode } });
}
