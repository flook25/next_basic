'use client';

import { useState } from "react";

export default function Page() {
    const [x, setX] = useState(0);

    // function to handle click
    const handleClick = () => {
        setX(x + 1);
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <button
                onClick={handleClick}
                // Tailwind CSS classes for styling the button
                className="
                    bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                    transition ease-in-out duration-150
                "
            >
                Click me
            </button>
            <p className="mt-4 text-xl font-semibold text-gray-800">X: {x}</p>
        </div>
    );
}
