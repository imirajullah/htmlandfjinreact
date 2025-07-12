let root=document.getElementById('root');
const rootElement = ReactDOM.createRoot(root);
let condition = function() {
        let a=5;
        let b=10;
        if (a > b) {
            return <h1>a is greater than b</h1>;
        }
        else 
            return <h1>b is greater than a</h1>;

}
rootElement.render(condition());