let y = document.getElementById('root');//take a variable and initalize it with the html element.
const root = ReactDOM.createRoot(y); //here we create a root for React to render our component.
//initilize that html elment with ReactDOM.createRoot.and also pass the variable y to it.
let g= function(){
    return <div> 
        <h1>hello</h1>;
        <p>i am developer</p>;
     </div>
}
root.render(g());