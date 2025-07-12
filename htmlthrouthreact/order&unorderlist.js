let root=document.getElementById('root');
const rootElement = ReactDOM.createRoot(root);
let list= function(){
    return <div>
        <h1>the list</h1>
        <ul>
            <li>apple</li>
            <li>apple</li>
            <li>apple</li>
        </ul>
        <ol>
            <li>mango</li>
            <li>mango</li>
            <li>mango</li>
        </ol>
    </div>
}
rootElement.render(list());