let root = document.getElementById('root');
const rootElement = ReactDOM.createRoot(root);

let ArrayComponent = function () {
  let arr = [1, 3, 2, 4, 5];

  const items = arr.map((item, index) => {
    return (
      <div key={index}>
        <h1>{item}</h1>
      </div>
    );
  });

  return <div>{items}</div>;
};

rootElement.render(<ArrayComponent />);


