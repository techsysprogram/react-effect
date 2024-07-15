import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {

  const [count, setCount] = useState(0)
  
  useEffect(() => {
    // effect , osea despues del effect te muestra el valor actual
    console.log ("%c effect " + count, "background: blue; color: white; padding: 2px;");
    return () => {
      // cleanup , osea antes del effect te muestra el valor anterior
      console.log ("%c cleanup " + count, "background: yellow; color: black; padding: 2px;");
    }
  },[count]); // si no le pasas el array vacio se ejecuta cada vez que se renderiza el componente


  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
