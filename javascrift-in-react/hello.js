let root = document.getElementById('root');
const rootElement = ReactDOM.createRoot(root);

function Hello() {
 alert("Hello world!"); //prompt 
  return alert; // Don't render anythingor null if above is promt
}

rootElement.render(<Hello />);
