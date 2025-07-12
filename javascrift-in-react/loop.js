// let root =document.getElementById('root');
// const rootElement = ReactDOM.createRoot(root);
// let Loop = function() {
//  let i=0;
//      for(i=0;i<5;i++){
//         console.log('hello world');
//      }
//         return(
//             <div>
//                 <h1>loop = {i}</h1>
//             </div>
//         );


// };
// rootElement.render(<Loop />); this will not work because it will not render anything in the browser, it will just log to the console.
let root = document.getElementById('root');
const rootElement = ReactDOM.createRoot(root);

let Loop = function () {
  let messages = [];
  let x = 0;
  let k = 0;

  // for loop - "hello" 5 times
  for (let i = 0; i < 5; i++) {
    messages.push(<h1 key={`for-${i}`}>hello</h1>);
  }

  // while loop - "world" 5 times
  while (x < 5) {
    messages.push(<h1 key={{x}}>world</h1>);
    x++;
  }

  // do...while loop - "loop" five times
  do {
    messages.push(<h1 key={{k}}>hello world</h1>);
    k++;
  } while (k < 5);

  return (
    <div>
      <h1>Loop Example</h1>
      {messages}
    </div>
  );
};

rootElement.render(<Loop />);
