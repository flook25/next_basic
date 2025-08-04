// app/components/CounterButton.tsx
'use client';

import { useContext } from "react";
// FIX: Use the absolute path starting with @
import { DataContext } from '@/app/share/context';

export default function CouterButton() {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("CouterButton must be used within a DataContext.Provider");
    }

    const { counter, setCounter } = context;

    const handleClick = () => {
        setCounter(counter + 1);
    }

    return <button onClick={handleClick}>Increment</button>
}