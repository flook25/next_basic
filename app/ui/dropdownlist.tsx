'use client';

import { useState } from "react";

export default function DropdownList() {
    const [foodList, setFoodList] = useState([
        { name: 'apple'},
        { name: 'banana'},
        { name: 'cherry'},
        { name: 'orange'},
        { name: 'pineapple'},
        { name: 'strawberry'},
        { name: 'watermelon'}
    ]);

    const [food, setFood] = useState('apple')


    return (
        <>
        <select value={food} onChange={e => setFood(e.target.value)}>
            {foodList.map((item, index) => (
                <option key={index} value={item.name}>{item.name}</option>
            ))}
        </select>

        <div>Food: {food}</div>
        
        </>
    )


}