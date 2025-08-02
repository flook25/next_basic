export default async function Page() { // <--- Added 'async' here
    let data = await fetch('https://api.vercel.app/blog');
    let posts = await data.json();

    return ( // <--- Added parentheses for the return of the component
        <ul>
            {posts.map((post: any) => ( // <--- Changed to parentheses for concise return
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}