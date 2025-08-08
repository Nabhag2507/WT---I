import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let a= 5;
  let b= 5;
  return (<>
    {a + b}
    <h1>hello world</h1>
    <h1>hello world</h1>
    </>
  );
}

export default App
