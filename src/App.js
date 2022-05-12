//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

// // react component - Start with CAPITAL LETTER - Returns valid JSX
// function App() {

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           This is my first React App!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  const [count, setCount] = useState(0)
  const [firstName, setFirstName] = useState ('*')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const logInLogOut = () => setIsLoggedIn(!isLoggedIn)
  
  return (
    <div className="Change-here-change-CSS">
      <header className="By-Convention-we-use-App-header">
        <h1>You clicked the button {count} times</h1>
        <section>
          <button onClick={() => {setCount(count + 1)}}> + </button>
          <button onClick={() => {setCount(0)}}> RESET </button>
          <button className="btn-red" onClick={() => {

            //if(count > 0){ 
            //   setCount(count - 1)
            // };

            //setCount(count? count - 1:0);
            //setCount(!count? 0 : count - 1)
            setCount(Math.max(count - 1,0));

          }}> - </button>

          {/* CONDITIONAL RENDEREING */}

          <h2>Welcome { isLoggedIn ? 'back!' : 'Guest' }</h2>
          <button onClick={logInLogOut}>{ isLoggedIn ? 'Logout' : 'Login' }</button>





          {/* <button onClick={() => logInLogOut()}>Login</button> Same as above */}
        </section>
        <section>
          <h2 onClick={()=> setFirstName(firstName + '*')}>Hello {firstName}</h2>
        </section>
      </header>
    </div>
  );
}

export default App;
