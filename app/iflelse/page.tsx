'use client';

import { useState } from "react";

export default function Page() {
    const [name, setName] = useState('');

    return (
        <>
            <div>กรอกชื่อได้เลย</div>
            <input value={name} onChange={e => setName(e.target.value)} />

            {name === 'admin' ?  <div>Welcome, Admin</div>: <></>}
        </>
    )



}