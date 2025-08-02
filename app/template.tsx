export default function Template({children} : {
    children: React.ReactNode
}) {
    return (
        <div>
            <div>Title of Template</div>
            <div>{children}</div>
        </div>
        
    );
}