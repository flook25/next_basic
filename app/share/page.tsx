// app/share/page.tsx
'use client';

import { useState } from 'react';
import CouterDisplay from '../components/CounterDisplay';
import CouterButton from '../components/CounterButton';
// Import DataContext from the new shared file
import { DataContext } from './context';

export default function Page() {
    const [counter, setCounter] = useState(0);

    return (
        // The provider now uses the imported context
        <DataContext.Provider value={{ counter, setCounter }}>
            <CouterDisplay />
            <CouterButton />
        </DataContext.Provider>
    );
}