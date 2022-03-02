// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import { Menu } from "./pages";

// export default class App extends React.Component{
//     render(){
//         return(
//             <div><Menu /> </div>
//         )
//     }
// }
// ReactDOM.render(<App />, document.getElementById('app'))

import React from 'react';
import './index.css';
import { Menu } from "./pages";

function App() {
  return (
    <div className="App">
        <Menu />
    </div>
  );
}

export default App;
