

let root = document.getElementById('root');
const rootElement = ReactDOM.createRoot(root);

let CreateTag = function () {
  return (
    <div>
      <h1 className="heading">hello world</h1>
    </div>
  );
};

rootElement.render(<CreateTag />);


  