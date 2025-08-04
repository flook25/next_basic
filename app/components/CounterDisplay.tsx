// app/components/CouterDisplay.tsx
'use client';

import { useContext } from "react";
// FIX: Use the absolute path starting with @
import { DataContext } from '@/app/share/context';

export default function CouterDisplay() {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("CouterDisplay must be used within a DataContext.Provider");
    }

    const { counter } = context;

    return <h1>Current Counter: {counter}</h1>
}