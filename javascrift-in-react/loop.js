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

  for (let i = 0; i < 5; i++) {
       messages.push(<h1 key={i}>hello world!</h1>);
  }
    return (
    <div>
           {messages}
    </div>
  );
};

rootElement.render(<Loop />);