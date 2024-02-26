import React from 'react';
import { useParams } from 'react-router-dom';

export default function CoinPage() {
    const { cryptoCoinName } = useParams();

    return (
        <div>
            <div>CoinPage</div>
            <div>
                {cryptoCoinName}
            </div>
        </div>
    );
}
