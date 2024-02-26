import React from 'react';
import Nav from './components/nav/Nav';

export function Layout({ children }: {
    children: React.ReactNode
}) {

    return (
        <>
            <Nav />
            {children}
        </>
    );
}
