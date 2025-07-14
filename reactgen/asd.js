let root = document.getElementById('root');
const rootElement = ReactDOM.createRoot(root);

function MainContainer() {
  return (
    <div>
      <h1>Welcome to React</h1>
    </div>
  );
}

rootElement.render(<MainContainer />);
