// App.js

import './App.css';
import router from './main.jsx';

function App() {
  return (
    <div className="App">
      {router()}
    </div>
  );
}

export default App;
