export default function SeverComponent() {
    const items = ['java', 'php' , 'php'];

    return <div>
       {items.map((item) => (
        <div key={item}>{item}</div>
       ))}
    </div>
}