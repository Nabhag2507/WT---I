import { useState } from 'react'
import Header from './demoFunctionComponent'
import Cls from './demoClassComponent'
import PropsDemo from './Lab17_1'
import eventHandlingDemo from './Lab17_2'
import MapDemo from './Lab18_1'

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

      {/* this is lab 18 1 */}
          <div className="container">
            <div className="row">
                <MapDemo/>
            </div>
          </div>
    </>
  );
}

export default App;
