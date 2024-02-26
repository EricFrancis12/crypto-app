import React from 'react';
import { useSelector } from 'react-redux';
import NavButton from './NavButton';
import SearchBar from '../SearchBar';
import CurrencySelector from '../CurrencySelector';
import DarkModeButton from '../DarkModeButton';
import { searchQueryChanged, currencyChanged } from '../../store/actions';
import { TCurrency } from '../../typings/types';
import { TStoreState } from '../../typings/reducer-types';
import HamburgerMenu from '../HamburgerMenu';

export default function Nav() {
    const searchQuery = useSelector((state: TStoreState) => state.searchQuery);
    const currency = useSelector((state: TStoreState) => state.currency);
    const darkMode = useSelector((state: TStoreState) => state.darkMode);

    const navButtons = [
        {
            name: 'Coins',
            href: '/'
        },
        {
            name: 'Portfolio',
            href: '/portfolio'
        }
    ];

    return (
        <div className={(darkMode ? 'bg-[#1f2128]' : 'bg-white') + ' flex justify-between items-center gap-2 p-4'}>
            <div className='hidden md:flex items-center gap-4'>
                {navButtons.map((navButton, index) => (
                    <NavButton key={index}
                        name={navButton.name}
                        href={navButton.href}
                    />
                ))}
            </div>
            <div className='flex items-center gap-4'>
                <SearchBar
                    value={searchQuery}
                    onChange={e => searchQueryChanged(e.target.value)}
                />
                <CurrencySelector
                    value={currency}
                    onChange={e => currencyChanged(e.target.value as TCurrency)}
                />
                <DarkModeButton className='hidden md:flex' />
            </div>
            <HamburgerMenu
                className='md:hidden'
                items={navButtons}
            >
                <div className={(darkMode ? 'bg-white' : 'bg-black') + ' h-[1px] w-full mt-2'} />
                <DarkModeButton />
            </HamburgerMenu>
        </div>
    );
}
