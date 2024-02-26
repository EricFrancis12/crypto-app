import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { darkModeChanged } from '../store/actions';
import { TStoreState } from '../typings/reducer-types';

export default function DarkModeButton({ className = '' }: {
    className?: string
}) {
    const darkMode = useSelector((state: TStoreState) => state.darkMode);

    return (
        <div
            className={(darkMode ? 'bg-[#2c2f36] text-white' : 'bg-gray-300 text-black')
                + ' flex justify-center items-center p-3 rounded cursor-pointer '
                + className}
            onClick={() => darkModeChanged(!darkMode)}
        >
            <FontAwesomeIcon icon={faCircleHalfStroke} />
        </div>
    );
}
