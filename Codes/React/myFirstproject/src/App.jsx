import { useState } from 'react'
import Header from './demoFunctionComponent'
import Cls from './demoClassComponent'
import PropsDemo from './Lab17_1'
import eventHandlingDemo from './Lab17_2'

function App() {
  const isDisplay = false;
  return (
    <>
      {/* this is react basic */}
          {/* <Header/>
          <Cls/> */}

      {/* this is lab 17 1 */}
          {/* <PropsDemo something = "hello world"/> */}

      {/* this is lab 17 2 */}
          {/* <button onClick={eventHandlingDemo}>Normal Button</button>
          <button onClick={()=>{
            alert("Arrow function button called");
          }}>Arrow Button</button> */}

      {/* this is lab 17 3 */}
          {/* {isDisplay ? <h1>isDisplay is true</h1> : <h1>isDisplay is false</h1>} */}
    </>
  );
}

export default App;
