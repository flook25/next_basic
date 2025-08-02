'use client';

interface UserProfileProps {
    name: string;
    age: number;
    email: string;
    isAdmin: boolean;
}

export default function UserProfile({name, age, email, isAdmin}: UserProfileProps) {
    return(
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
            <p>{isAdmin && 'Admin Level'}</p>
        </div>
    )
}