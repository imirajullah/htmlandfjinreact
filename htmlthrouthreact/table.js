let root= document.getElementById('root');
const rootElement = ReactDOM.createRoot(root);
let table = function(){
    return <div>
        <h1> table</h1>
        <table>
            <tr><td>data</td>row</tr>
            <tr>row</tr>
            <td>data</td>
            <tr>row</tr>
            <td>data</td>
            <th>
                header
            </th>
        </table>
    </div>
}
rootElement.render(table());