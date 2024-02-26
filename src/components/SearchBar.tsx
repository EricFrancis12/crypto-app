import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import useDarkMode from '../hooks/useDarkMode';

export default function SearchBar({ value, onChange }: {
    value: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>
}) {
    const darkMode = useDarkMode();

    return (
        <div
            className={(darkMode ? 'bg-[#2c2f36] text-white' : 'bg-gray-300 text-black')
                + ' flex items-center gap-4 px-2 md:px-4 py-2 rounded'}
        >
            <FontAwesomeIcon icon={faSearch} />
            <input
                className='w-[75px] sm:w-[250px] md:w-[250px] lg:w-[350px] px-2 bg-transparent border-none outline-none'
                type='text'
                placeholder='Search...'
                value={value}
                onChange={onChange}
            />
        </div>
    );
}
