let root=document.getElementById('root');
const rootElement=ReactDOM.createRoot(root);
let form = function() {
    return <div>
        <h1>Form Example</h1>
        <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <br />
            <input type="submit" value="Submit"/>
        </form>
    </div>
}
rootElement.render(form());