let root = document.getElementById('root');
const rootElement = ReactDOM.createRoot(root);

let AddSubMulDiv = function () {
  let a = 10;
  let b = 5;

  let sum = a + b;
  let difference = a - b;
  let product = a * b;
  let quotient = a / b;

  return (
    <div>
        <h1>sum = {sum}</h1>
        <h1>difference = {difference}</h1>
        <h1>product = {product}</h1>
        <h1>quotient = {quotient}</h1>
    </div>
  );
};

rootElement.render(<AddSubMulDiv />);

