import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollar, faGbp, faEuro, faBitcoinSign, faDiamond } from '@fortawesome/free-solid-svg-icons';
import { TCurrency } from '../typings/types';
import useDarkMode from '../hooks/useDarkMode';

export default function CurrencySelector({ value, onChange }: {
    value: TCurrency,
    onChange: React.ChangeEventHandler<HTMLSelectElement>
}) {
    const darkMode = useDarkMode();

    const currencies: TCurrency[] = [
        'USD',
        'GBP',
        'EUR',
        'BTC',
        'ETH'
    ];

    return (
        <div
            className={(darkMode ? 'bg-[#2c2f36] text-white' : 'bg-gray-300 text-black')
                + ' flex items-center gap-2 px-3 py-2 rounded'}
        >
            <Icon value={value} />
            <select
                className='bg-transparent border-none outline-none cursor-pointer'
                value={value}
                onChange={onChange}
            >
                {currencies.map((currency, index) => (
                    <option key={index}
                        className='text-black'
                    >
                        {currency}
                    </option>
                ))}
            </select>
        </div>
    );
}

const Icon = ({ value }: {
    value: TCurrency
}) => {
    let icon;
    switch (value) {
        case 'USD': icon = faDollar; break;
        case 'GBP': icon = faGbp; break;
        case 'EUR': icon = faEuro; break;
        case 'BTC': icon = faBitcoinSign; break;
        case 'ETH': icon = faDiamond; break;
    }
    return (
        <FontAwesomeIcon icon={icon} />
    );
};
