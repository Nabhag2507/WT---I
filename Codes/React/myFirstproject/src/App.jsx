import { useState } from 'react'
import Header from './demoFunctionComponent'
import Cls from './demoClassComponent'
import PropsDemo from './Lab17_1'
import eventHandlingDemo from './Lab17_2'
import MapDemo from './Lab18_1'
import CmpA from './propertyDrilling/CmpA'
import Lab19_useStateHook from './Lab19_useStateHook'
import UseEffectdemo from './UseEffectdemo'
import { BrowserRouter, Routes } from 'react-router-dom'
import Login from './login components/login'
import Dashboard from './login components/dashboard'

function App() {
  const [user, setUser] = useState(null);
  function login(username, password) {
    if (username === "ruturaj" && password === "1234") {
      setUser(username);
      return true;
    }
    return false;
  }
  function logout() {
    setUser(null);
  }
  // const isDisplay = false;
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
      {/* <div className="container">
            <div className="row">
                <MapDemo/>
            </div>
          </div> */}

      {/* property drilling */}
      {/* <CmpA name="Nabhag"/> */}

      {/* this is use state hook example  */}
      {/* <Lab19_useStateHook/> */}

      {/* this is use effect demo */}
      {/* <UseEffectdemo/> */}

      {/* login and dashboard  */}
        {(user) ? (<Dashboard user={user} logout={logout}/>) : (<Login login={login}/>)}
    </>
  );
}

export default App;
