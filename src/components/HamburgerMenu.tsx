import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import useDarkMode from '../hooks/useDarkMode';

export default function HamburgerMenu({ items, className = '', children }: {
    items: {
        name: string,
        href?: string
    }[],
    className?: string,
    children?: React.ReactNode
}) {
    const darkMode = useDarkMode();

    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className={'relative ' + className}>
            <div
                className={(darkMode ? 'text-white' : 'text-black') + ' cursor-pointer'}
                onClick={() => setOpen(prevOpen => !prevOpen)}
            >
                <FontAwesomeIcon icon={faBars} />
            </div>
            {open &&
                <div
                    className={(darkMode ? 'bg-[#2c2f36] text-white' : 'bg-gray-300 text-black')
                        + ' absolute bottom-100 right-0 flex flex-col justify-start items-center '}
                >
                    {items.map((item, index) => (
                        <a key={index}
                            href={item.href}
                            className='w-full px-2 py-1 text-center'
                        >
                            {item.name}
                        </a>
                    ))}
                    {children}
                </div>
            }
        </div>
    );
}
