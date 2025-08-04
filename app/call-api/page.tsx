'use client';

import axios from "axios";

export default function Page() {
    const doPost = async () => {
        try {
            const payload = { id: 100, name: 'flook' };
            const response = await axios.post('http://localhost:3000/api/items', payload);
            console.log('POST Response:', response.data);
            alert('POST request successful!');
        } catch (error) {
            console.error('POST Error:', error);
            alert('POST request failed.');
        }
    };

    const doGet = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/items');
            console.log('GET Response:', response.data);
            alert('GET request successful!');
        } catch (error) {
            console.error('GET Error:', error);
            alert('GET request failed.');
        }
    };

    const doPut = async () => {
        try {
            const payload = { id: 100, name: 'kob' };
            await axios.put('http://localhost:3000/api/items/100', payload);
            alert('PUT request successful!');
        } catch (error) {
            console.error('PUT Error:', error);
            alert('PUT request failed.');
        }
    };

    const doDelete = async () => {
        try {
            await axios.delete('http://localhost:3000/api/items/100');
            alert('DELETE request successful!');
        } catch (error) {
            console.error('DELETE Error:', error);
            alert('DELETE request failed.');
        }
    };

    // Base style for all buttons to ensure consistency
    const baseButtonStyles = "text-white font-bold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="p-8 bg-white rounded-lg shadow-xl space-x-4">
                {/* POST Button - Green */}
                <button
                    onClick={doPost}
                    className={`${baseButtonStyles} bg-green-500 hover:bg-green-600 focus:ring-green-500`}
                >
                    Post
                </button>

                {/* GET Button - Blue */}
                <button
                    onClick={doGet}
                    className={`${baseButtonStyles} bg-blue-500 hover:bg-blue-600 focus:ring-blue-500`}
                >
                    Get
                </button>

                {/* PUT Button - Orange */}
                <button
                    onClick={doPut}
                    className={`${baseButtonStyles} bg-orange-500 hover:bg-orange-600 focus:ring-orange-500`}
                >
                    Put
                </button>

                {/* DELETE Button - Red */}
                <button
                    onClick={doDelete}
                    className={`${baseButtonStyles} bg-red-500 hover:bg-red-600 focus:ring-red-500`}
                >
                    Delete
                </button>
            </div>
        </div>
    );
}