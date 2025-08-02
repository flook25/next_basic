'use client';

import { useState } from "react";

export default function ClientComponent() {
    const [items] = useState(['java', 'php', 'python']);

    return (
        <div>
            {items.map((item) => (
                <div key={item}>{item}</div>
            ))}
        </div>
    )



}