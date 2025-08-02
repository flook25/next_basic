'use client';

import { useState, ChangeEvent } from 'react';

// Define a type for the state to ensure type safety.
// This allows for easy addition of new languages.
type CheckboxState = {
  java: boolean;
  php: boolean;
  cs: boolean; // C#
};

// An array to define the checkboxes, making the component data-driven.
const languages = [
  { id: 'java', label: 'Java' },
  { id: 'php', label: 'PHP' },
  { id: 'cs', label: 'C#' },
];

export default function Checkbox() {
  // Use a single state object to manage all checkbox values.
  const [checkedItems, setCheckedItems] = useState<CheckboxState>({
    java: false,
    php: false,
    cs: false,
  });

  // A single, generic handler to update the state.
  // It uses the checkbox's 'name' attribute to identify which property to update.
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCheckedItems(prevItems => ({
      ...prevItems,
      [name]: checked,
    }));
  };

  return (
    <div className="space-y-4 p-6 bg-gray-800 rounded-lg">
      <h3 className="text-xl font-semibold text-white">Select Languages</h3>
      <div className="flex flex-col space-y-2">
        {/* Map over the languages array to render checkboxes dynamically. */}
        {languages.map(lang => (
          <label key={lang.id} className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              name={lang.id}
              // The `keyof` operator ensures that we only access valid properties of CheckboxState.
              checked={checkedItems[lang.id as keyof CheckboxState]}
              onChange={handleCheckboxChange}
              className="h-5 w-5 rounded bg-gray-700 border-gray-600 text-teal-500 focus:ring-teal-500"
            />
            <span className="text-gray-300">{lang.label}</span>
          </label>
        ))}
      </div>

      {/* Display the current state for debugging or confirmation. */}
      <div className="mt-6 p-4 bg-gray-900 rounded">
        <p className="font-mono text-sm text-gray-400">
          Current State: {JSON.stringify(checkedItems, null, 2)}
        </p>
      </div>
    </div>
  );
}