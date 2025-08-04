'use client'

import { useState, ChangeEvent } from "react";

// Define a type for the gender values to ensure type safety
type Gender = 'male' | 'female' | 'other';

export default function GenderRadioGroup() {
    const [gender, setGender] = useState<Gender>('male');

    const handleGenderChange = (e: ChangeEvent<HTMLInputElement>) => {
        setGender(e.target.value as Gender);
    };

    return (
        <fieldset className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
            <legend className="text-lg font-semibold text-gray-800 mb-4">Please select your gender:</legend>
            <div className="flex flex-col sm:flex-row sm:gap-8">
                <div className="flex items-center mb-4 sm:mb-0">
                    <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        checked={gender === 'male'}
                        onChange={handleGenderChange}
                        className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <label htmlFor="male" className="ml-3 block text-sm font-medium text-gray-700">Male</label>
                </div>

                <div className="flex items-center mb-4 sm:mb-0">
                    <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        checked={gender === 'female'}
                        onChange={handleGenderChange}
                        className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <label htmlFor="female" className="ml-3 block text-sm font-medium text-gray-700">Female</label>
                </div>

                <div className="flex items-center">
                    <input
                        type="radio"
                        id="other"
                        name="gender"
                        value="other"
                        checked={gender === 'other'}
                        onChange={handleGenderChange}
                        className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <label htmlFor="other" className="ml-3 block text-sm font-medium text-gray-700">Other</label>
                </div>
            </div>
        </fieldset>
    );
}