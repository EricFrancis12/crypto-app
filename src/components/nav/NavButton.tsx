import React from 'react';
import useDarkMode from '../../hooks/useDarkMode';

export default function NavButton({ name, href }: {
    name: string,
    href: string
}) {
    const darkMode = useDarkMode();
    const bgActive = darkMode ? ' bg-[#2c2f36] ' : ' bg-gray-300 ';
    const bgInactive = darkMode ? ' hover:bg-[#2c2f36] ' : ' hover:bg-gray-300 ';
    const active = window.location.pathname === href;

    return (
        <a
            className='cursor-pointer'
            href={active ? undefined : href}
        >
            <div
                className={(active ? bgActive : bgInactive)
                    + (darkMode ? ' text-white ' : ' text-black ')
                    + ' flex justify-center items-center w-[100px] py-3 rounded-lg '}
            >
                <span>
                    {name}
                </span>
            </div>
        </a>
    );
}
